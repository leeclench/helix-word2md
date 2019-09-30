/*
 * Copyright 2018 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
/* eslint-disable no-console,no-param-reassign */
const { logger: setupLogger } = require('@adobe/openwhisk-action-utils');
const statusWrap = require('@adobe/helix-status').wrap;
const GoogleDocs = require('./GoogleDocs.js');
const docs2md = require('./docs2md.js');

let log;

/**
 * Generates an error response
 * @param {string} message - error message
 * @param {number} statusCode - error code.
 * @returns response
 */
function error(message, statusCode = 500) {
  return {
    statusCode,
    headers: {
      'Cache-Control': 'no-store, private, must-revalidate',
    },
    body: message,
  };
}

/**
 * Fetches the google document via API and converts it via docs2md.
 * @param params
 * @returns {Promise<response>}
 */
async function fetchViaAPI(params) {
  const {
    GOOGLE_DOCS2MD_CLIENT_ID: clientId,
    GOOGLE_DOCS2MD_CLIENT_SECRET: clientSecret,
    GOOGLE_DOCS2MD_REFRESH_TOKEN: refreshToken,
    rootId, path,
  } = params;
  if (!clientId) {
    return error('GOOGLE_DOCS2MD_CLIENT_ID parameter missing.');
  }
  if (!clientSecret) {
    return error('GOOGLE_DOCS2MD_CLIENT_SECRET parameter missing.');
  }
  if (!refreshToken) {
    return error('GOOGLE_DOCS2MD_REFRESH_TOKEN parameter missing.');
  }
  if (!rootId) {
    return error('rootId parameter missing.');
  }
  if (!path) {
    return error('path parameter missing.');
  }

  const auth = GoogleDocs.createOAuth({
    clientId,
    clientSecret,
  }, {
    refresh_token: refreshToken,
  });

  const docs = new GoogleDocs(auth).withLogger(log);
  const t0 = Date.now();
  const docId = await docs.getDocId(rootId, path);
  const t1 = Date.now();
  const doc = await docs.fetchDocument(docId);
  const t2 = Date.now();
  const md = await docs2md(doc);
  const t3 = Date.now();
  log.info('resolve=%d, fetch=%d, convert=%d', t1 - t0, t2 - t1, t3 - t2);
  return {
    statusCode: 200,
    body: md,
    headers: {
      'Content-Type': 'text/plain',
      'Content-Length': md.length,
      'Cache-Control': 'no-store, private, must-revalidate',
    },
  };
}

/**
 * Main function
 * @param params Action params
 * @returns {Promise<*>} The response
 */
async function run(params) {
  const disclosed = { ...params };
  Object.keys(disclosed).forEach((key) => {
    if (key.match(/^[A-Z0-9_]+$/)) {
      delete disclosed[key];
    }
  });
  log.trace('%s', JSON.stringify(disclosed));

  try {
    return await fetchViaAPI(params);
  } catch (e) {
    log.error('error while converting document: %s', e);
    return error('error while converting document', e.statusCode);
  }
}

/**
 * Main function called by the openwhisk invoker.
 * @param params Action params
 * @returns {Promise<*>} The response
 */
async function main(params) {
  try {
    log = setupLogger(params, log);
    const result = await run(params);
    if (log.flush) {
      log.flush(); // don't wait
    }
    return result;
  } catch (e) {
    console.error(e);
    return {
      statusCode: e.statusCode || 500,
    };
  }
}

module.exports.main = statusWrap(main, {});

// helper method for testing
module.exports.setLogger = (logger) => {
  log = logger;
};
