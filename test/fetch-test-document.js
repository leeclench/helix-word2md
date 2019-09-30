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

/* eslint-disable no-console */

const fs = require('fs');
const OneDrive = require('./../src/OneDrive.js');
const docs2md = require('./../src/docs2md.js');

require('dotenv').config();

async function main() {
  const {
    AZURE_WORD2MD_CLIENT_ID: clientId,
    AZURE_WORD2MD_CLIENT_SECRET: clientSecret,
    AZURE_WORD2MD_REFRESH_TOKEN: refreshToken,
  } = process.env;

  const drive = new OneDrive({
    clientId,
    clientSecret,
    refreshToken,
  });

  console.time('total');
  console.log(await drive.me());
  // let doc = '';
  // try {
  //   doc = JSON.parse(fs.readFileSync('doc.json', 'utf-8'));
  //   process.stderr.write('doc.json loaded.\n');
  // } catch (e) {
  //   process.stderr.write('doc.json not found. fetching from google.\n');
  //   // ignore
  // }
  //
  // if (!doc) {
  //   console.time('lookup');
  //   const docId = await docs.getDocId('1I_FwT5qXkZTevAeZ9EqUqLaS0RbLFkI2', 'styling-test-document');
  //   console.timeEnd('lookup');
  //   console.time('fetch');
  //   doc = await docs.fetchDocument(docId);
  //   console.timeEnd('fetch');
  //   fs.writeFileSync('doc.json', JSON.stringify(doc, null, 2), 'utf-8');
  // }
  //
  // console.time('convert');
  // const md = await docs2md(doc);
  // console.timeEnd('convert');

  console.timeEnd('total');
  // console.log(md);

  console.time('total');
  console.log(await drive.me());
  console.timeEnd('total');

}

main().catch(console.error);
