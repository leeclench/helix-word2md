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
const docx2md = require('./../src/docx2md.js');

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
  let doc = '';
  try {
    doc = fs.readFileSync('document.docx');
    process.stderr.write('document.docx loaded.\n');
  } catch (e) {
    process.stderr.write('document.docx not found. fetching from onedrive.\n');
    // ignore
  }

  if (!doc) {
    console.time('lookup');
    const rootItem = await drive.getDriveItemFromShareLink('https://adobe-my.sharepoint.com/personal/tripod_adobe_com/Documents/helix-content?csf=1&e=Fz6r5Z');
    console.timeEnd('lookup');
    console.time('fetch');
    doc = await drive.getDriveItem(rootItem, 'styling-test.docx', true);
    console.timeEnd('fetch');
    fs.writeFileSync('document.docx', doc);
  }

  console.time('convert');
  const md = await docx2md(doc);
  console.timeEnd('convert');

  console.timeEnd('total');
  console.log(md);
}

main().catch(console.error);
