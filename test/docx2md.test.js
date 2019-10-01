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

const fse = require('fs-extra');
const path = require('path');
const assert = require('assert');
const docx2md = require('../src/docx2md');

describe('Docx to markdown converter', () => {
  it('converts a google docs json correctly', async () => {
    const doc = await fse.readFile(path.resolve(__dirname, 'fixtures', 'document.docx'));
    const expected = await fse.readFile(path.resolve(__dirname, 'fixtures', 'doc.md'), 'utf-8');
    const actual = await docx2md(doc);
    assert.equal(actual, expected);
  });
});
