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

const mammoth = require('mammoth');

/**
 * Converts a docx to markdown.
 *
 * @param {Buffer} doc - the word document
 * @returns the markdown representation.
 */
async function docx2markdown(doc) {
  const res = await mammoth.convertToMarkdown(doc, {
    styleMap: [
      "p[style-name='Code Block'] => code",
      "p[style-name='Inline Code'] => code",
    ],
  });
  if (res.messages.length > 0) {
    // eslint-disable-next-line no-console
    console.log(res.messages);
  }
  return res.value;
}

module.exports = docx2markdown;
