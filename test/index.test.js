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
const { Logger } = require('@adobe/helix-shared');
const fse = require('fs-extra');
const assert = require('assert');
const nock = require('nock');
const { main, setLogger } = require('../src/index.js');

const DUMMY_PARAMS = {
  GOOGLE_DOCS2MD_CLIENT_ID: 'dummy',
  GOOGLE_DOCS2MD_CLIENT_SECRET: 'dummy',
  GOOGLE_DOCS2MD_REFRESH_TOKEN: 'dummy',
  rootId: 'abcd',
  path: '/foo',
};

describe('Action Tests', () => {
  afterEach(() => {
    setLogger(null);
    nock.cleanAll();
  });

  ['GOOGLE_DOCS2MD_CLIENT_ID', 'GOOGLE_DOCS2MD_CLIENT_SECRET', 'GOOGLE_DOCS2MD_REFRESH_TOKEN', 'rootId', 'path'].forEach((name, idx, names) => {
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
    const docsJson = await fse.readFile(path.resolve(__dirname, 'fixtures', 'doc.json'));
    const docsMd = await fse.readFile(path.resolve(__dirname, 'fixtures', 'doc.md'), 'utf-8');
    nock('https://oauth2.googleapis.com')
      .post('/token')
      .reply(200, {
        refresh_token: 'dummy',
      })
      .post('/token')
      .reply(200, {
        refresh_token: 'dummy',
      });
    nock('https://www.googleapis.com')
      .get('/drive/v3/files?q=%27abcd%27%20in%20parents%20and%20name%20%3D%20%22foo%22%20and%20trashed%3Dfalse%20and%20mimeType%20%21%3D%20%27application%2Fvnd.google-apps.folder%27&fields=files%28id%2C%20name%29&includeItemsFromAllDrives=true&supportsAllDrives=true')
      .reply(200, {
        files: [
          {
            id: 1234,
          },
        ],
      });
    nock('https://docs.googleapis.com')
      .get('/v1/documents/1234')
      .reply(200, docsJson);

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
    const docsJson = await fse.readFile(path.resolve(__dirname, 'fixtures', 'doc.json'));
    const docsMd = await fse.readFile(path.resolve(__dirname, 'fixtures', 'doc.md'), 'utf-8');
    nock('https://oauth2.googleapis.com')
      .post('/token')
      .reply(200, {
        refresh_token: 'dummy',
      })
      .post('/token')
      .reply(200, {
        refresh_token: 'dummy',
      })
      .post('/token')
      .reply(200, {
        refresh_token: 'dummy',
      });
    nock('https://www.googleapis.com')
      .get('/drive/v3/files?q=%27abcd%27%20in%20parents%20and%20name%20%3D%20%22foo%22%20and%20trashed%3Dfalse%20and%20mimeType%20%3D%20%27application%2Fvnd.google-apps.folder%27&fields=files%28id%2C%20name%29&includeItemsFromAllDrives=true&supportsAllDrives=true')
      .reply(200, {
        files: [
          {
            id: 6644,
          },
        ],
      });
    nock('https://www.googleapis.com')
      .get('/drive/v3/files?q=%276644%27%20in%20parents%20and%20name%20%3D%20%22bar%22%20and%20trashed%3Dfalse%20and%20mimeType%20%21%3D%20%27application%2Fvnd.google-apps.folder%27&fields=files%28id%2C%20name%29&includeItemsFromAllDrives=true&supportsAllDrives=true')
      .reply(200, {
        files: [
          {
            id: 1234,
          },
        ],
      });
    nock('https://docs.googleapis.com')
      .get('/v1/documents/1234')
      .reply(200, docsJson);

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
    nock('https://oauth2.googleapis.com')
      .post('/token')
      .reply(200, {
        refresh_token: 'dummy',
      })
      .post('/token')
      .reply(200, {
        refresh_token: 'dummy',
      });
    nock('https://www.googleapis.com')
      .get('/drive/v3/files?q=%27abcd%27%20in%20parents%20and%20name%20%3D%20%22not_exists%22%20and%20trashed%3Dfalse%20and%20mimeType%20%21%3D%20%27application%2Fvnd.google-apps.folder%27&fields=files%28id%2C%20name%29&includeItemsFromAllDrives=true&supportsAllDrives=true')
      .reply(200, {
        files: [],
      });
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

  it('error in main function is caught', async () => {
    const logger = Logger.getTestLogger({
      // tune this for debugging
      level: 'info',
    });
    logger.trace = logger.debug;
    logger.fields = {}; // avoid errors during setup. test logger is winston, but we need bunyan.
    logger.flush = () => {
      throw new Error('error during flush.');
    };
    setLogger(logger);

    const result = await main({
      rootId: 'abcd',
      path: '/foo',
    }, logger);

    assert.deepEqual(result, {
      statusCode: 500,
    });
  });
});
