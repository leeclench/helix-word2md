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

/* eslint-env mocha */

'use strict';

const path = require('path');
const fse = require('fs-extra');
const assert = require('assert');
const nock = require('nock');
const { main } = require('../src/index.js');

const DUMMY_PARAMS = {
  AZURE_WORD2MD_CLIENT_ID: 'dummy',
  AZURE_WORD2MD_CLIENT_SECRET: 'dummy',
  AZURE_WORD2MD_REFRESH_TOKEN: 'dummy',
  shareLink: 'abcd',
  path: '/foo',
};

describe('Action Tests', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  ['AZURE_WORD2MD_CLIENT_ID', 'AZURE_WORD2MD_CLIENT_SECRET', 'AZURE_WORD2MD_REFRESH_TOKEN', 'shareLink', 'path'].forEach((name, idx, names) => {
    it(`action fails if ${name} parameter is missing`, async () => {
      const params = {};
      for (let i = 0; i < idx; i += 1) {
        params[names[i]] = 'dummy';
      }
      const result = await main(params);
      assert.deepEqual(result, {
        body: `${name} parameter missing.`,
        headers: {
          'Cache-Control': 'no-store, private, must-revalidate',
        },
        statusCode: 500,
      });
    });
  });

  it('action returns content from google docs', async () => {
    const docx = await fse.readFile(path.resolve(__dirname, 'fixtures', 'document.docx'));
    const docsMd = await fse.readFile(path.resolve(__dirname, 'fixtures', 'doc.md'), 'utf-8');
    nock('https://login.windows.net')
      .post('/common/oauth2/token?api-version=1.0')
      .reply(200, {
        token_type: 'Bearer',
        refresh_token: 'dummy',
        access_token: 'dummy',
        expires_in: 81000,
      });
    nock('https://graph.microsoft.com/v1.0')
      .get('/shares/u!YWJjZA=/driveItem')
      .reply(200, {
        id: 'docid',
        parentReference: {
          driveId: 'driveid',
        },
      });
    nock('https://graph.microsoft.com/v1.0')
      .get('/drives/driveid/items/docid:/foo:/content')
      .reply(200, docx);

    const result = await main(DUMMY_PARAMS);
    assert.deepEqual(result, {
      statusCode: 200,
      body: docsMd,
      headers: {
        'Cache-Control': 'no-store, private, must-revalidate',
        'Content-Length': docsMd.length,
        'Content-Type': 'text/plain',
      },
    });
  });

  it('action returns content from google docs with folder', async () => {
    const docx = await fse.readFile(path.resolve(__dirname, 'fixtures', 'document.docx'));
    const docsMd = await fse.readFile(path.resolve(__dirname, 'fixtures', 'doc.md'), 'utf-8');
    nock('https://login.windows.net')
      .post('/common/oauth2/token?api-version=1.0')
      .reply(200, {
        token_type: 'Bearer',
        refresh_token: 'dummy',
        access_token: 'dummy',
        expires_in: 81000,
      });
    nock('https://graph.microsoft.com/v1.0')
      .get('/shares/u!YWJjZA=/driveItem')
      .reply(200, {
        id: 'docid',
        parentReference: {
          driveId: 'driveid',
        },
      });
    nock('https://graph.microsoft.com/v1.0')
      .get('/drives/driveid/items/docid:/foo/bar:/content')
      .reply(200, docx);


    const result = await main({
      ...DUMMY_PARAMS,
      path: '/foo/bar',
    });
    assert.deepEqual(result, {
      statusCode: 200,
      body: docsMd,
      headers: {
        'Cache-Control': 'no-store, private, must-revalidate',
        'Content-Length': docsMd.length,
        'Content-Type': 'text/plain',
      },
    });
  });

  it('action handles 404 if file not found', async () => {
    nock('https://login.windows.net')
      .post('/common/oauth2/token?api-version=1.0')
      .reply(200, {
        token_type: 'Bearer',
        refresh_token: 'dummy',
        access_token: 'dummy',
        expires_in: 81000,
      });
    nock('https://graph.microsoft.com/v1.0')
      .get('/shares/u!YWJjZA=/driveItem')
      .reply(200, {
        id: 'docid',
        parentReference: {
          driveId: 'driveid',
        },
      });
    nock('https://graph.microsoft.com/v1.0')
      .get('/drives/driveid/items/docid:/not_exists:/content')
      .reply(404);

    const result = await main({
      ...DUMMY_PARAMS,
      path: '/not_exists',
    });
    assert.deepEqual(result, {
      body: 'error while converting document',
      headers: {
        'Cache-Control': 'no-store, private, must-revalidate',
      },
      statusCode: 404,
    });
  });
});
