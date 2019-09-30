/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

// eslint-disable-next-line max-classes-per-file
const EventEmitter = require('events');
const { AuthenticationContext } = require('adal-node');
const MicrosoftGraph = require('@microsoft/microsoft-graph-client');
require('isomorphic-fetch');

const AZ_AUTHORITY_HOST_URL = 'https://login.windows.net';
const AZ_RESOURCE = 'https://graph.microsoft.com'; // '00000002-0000-0000-c000-000000000000'; ??
const AZ_TENANT = 'common';
const AZ_AUTHORITY_URL = `${AZ_AUTHORITY_HOST_URL}/${AZ_TENANT}`;

class StatusCodeError extends Error {
  constructor(msg, statusCode) {
    super(msg);
    this.statusCode = statusCode;
  }
}

/**
 * Remember the access token for future action invocations.
 */
let tokenCache = {};

/**
 * Helper class that facilitates accessing one drive.
 */
class OneDrive extends EventEmitter {
  constructor(opts) {
    super(opts);
    this.clientId = opts.clientId;
    this.clientSecret = opts.clientSecret;
    this.refreshToken = opts.refreshToken;
    this._log = opts.log || console;
    this._client = null;
  }

  // eslint-disable-next-line class-methods-use-this
  get authenticated() {
    return !!tokenCache.accessToken;
  }

  authProvider() {
    return (done) => {
      const { log } = this;
      if (tokenCache.accessToken) {
        const expires = Date.parse(tokenCache.expiresOn);
        if (expires >= (Date.now())) {
          log.info('access token still valid.');
          done(null, tokenCache.accessToken);
          return;
        }
        log.info('access token is expired. requesting new one.');
      }

      const context = new AuthenticationContext(AZ_AUTHORITY_URL);
      context.acquireTokenWithRefreshToken(
        this.refreshToken,
        this.clientId,
        this.clientSecret,
        AZ_RESOURCE,
        (err, response) => {
          if (err) {
            log.error('Error while refreshing access token', err);
            done('unable to refresh token');
          } else {
            tokenCache = response;
            this.emit('tokens', response);
            done(null, tokenCache.accessToken);
          }
        },
      );
    };
  }

  createLoginUrl(redirectUri, state) {
    return `${AZ_AUTHORITY_URL}/oauth2/authorize?response_type=code&client_id=${this.clientId}&redirect_uri=${redirectUri}&state=${state}&resource=${AZ_RESOURCE}`;
  }

  async aquireToken(redirectUri, code) {
    const context = new AuthenticationContext(AZ_AUTHORITY_URL);
    return new Promise((resolve, reject) => {
      context.acquireTokenWithAuthorizationCode(
        code,
        redirectUri,
        AZ_RESOURCE,
        this.clientId,
        this.clientSecret,
        (err, response) => {
          if (err) {
            reject(err);
          } else {
            tokenCache = response;
            this.emit('tokens', response);
            resolve();
          }
        },
      );
    });
  }

  get client() {
    if (!this._client) {
      this._client = MicrosoftGraph.Client.init({
        defaultVersion: 'v1.0',
        authProvider: this.authProvider(),
      });
    }
    return this._client;
  }

  get log() {
    return this._log;
  }

  async me() {
    try {
      return this
        .client
        .api('/me')
        .get();
    } catch (e) {
      this.log.error(e);
      throw new StatusCodeError(e.msg, 500);
    }
  }
}

module.exports = OneDrive;
