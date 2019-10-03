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
const { logger } = require('@adobe/openwhisk-action-utils');
const statusWrap = require('@adobe/helix-status').wrap;
const OneDrive = require('./OneDrive.js');
const docx2md = require('./docx2md.js');

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
 * Fetches the Google document via the API and converts it via docs2md.
 * @param params
 * @returns {Promise<response>}
 */
async function fetchViaAPI(params) {
  const { __ow_logger: log } = params;
  const {
    AZURE_WORD2MD_CLIENT_ID: clientId,
    AZURE_WORD2MD_CLIENT_SECRET: clientSecret,
    AZURE_WORD2MD_REFRESH_TOKEN: refreshToken,
    shareLink, path,
  } = params;
  if (!clientId) {
    return error('AZURE_WORD2MD_CLIENT_ID parameter missing.');
  }
  if (!clientSecret) {
    return error('AZURE_WORD2MD_CLIENT_SECRET parameter missing.');
  }
  if (!refreshToken) {
    return error('AZURE_WORD2MD_REFRESH_TOKEN parameter missing.');
  }
  if (!shareLink) {
    return error('shareLink parameter missing.');
  }
  if (!path) {
    return error('path parameter missing.');
  }

  const drive = new OneDrive({
    clientId,
    clientSecret,
    refreshToken,
  });

  const t0 = Date.now();
  const rootItem = await drive.getDriveItemFromShareLink(shareLink);
  const t1 = Date.now();
  const doc = await drive.getDriveItem(rootItem, path, true);
  const t2 = Date.now();
  const md = await docx2md(doc);
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
  const { __ow_logger: log } = params;
  try {
    return await fetchViaAPI(params);
  } catch (e) {
    log.error('Error while converting document: %s', e);
    return error('Error while converting document', e.statusCode);
  }
}

/**
 * Main function called by the openwhisk invoker.
 * @param params Action params
 * @returns {Promise<*>} The response
 */
async function main(params) {
  return logger.wrap(run, params);
}

module.exports.main = statusWrap(main, {});
