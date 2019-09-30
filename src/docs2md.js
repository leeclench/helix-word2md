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

/* eslint-disable no-control-regex */

/**
 * Google Document
 * @external Document
 * @see {@link https://developers.google.com/docs/api/reference/rest/v1/document}
 */

/**
 * Google Document - Structural Element
 * @external StructuralElement
 * https://developers.google.com/docs/api/reference/rest/v1/documents#StructuralElement
 */

/**
 * Text style to heading mapping.
 */
const HEADINGS = {
  TITLE: '# ',
  SUBTITLE: '### ',
  HEADING_1: '# ',
  HEADING_2: '## ',
  HEADING_3: '### ',
  HEADING_4: '#### ',
  HEADING_5: '##### ',
  HEADING_6: '###### ',
};

/**
 * Text style to markdown code mapping
 */
const TEXT_STYLES = {
  bold: {
    name: 'bold',
    on: '**',
    off: '**',
  },
  italic: {
    name: 'italic',
    on: '_',
    off: '_',
  },
  underline: {
    name: 'underline',
    on: '<u>',
    off: '</u>',
  },
  strikethrough: {
    name: 'strikethrough',
    on: '<del>',
    off: '</del>',
  },
  SUPERSCRIPT: {
    name: 'baselineOffset',
    on: '<sup>',
    off: '</sup>',
  },
  SUBSCRIPT: {
    name: 'baselineOffset',
    on: '<sub>',
    off: '</sub>',
  },
};

/**
 * Monospace fonts used in google docs
 */
const CODE_FONTS = {
  'Courier New': true,
  'Source Code Pro': true,
  VT323: true,
  Consolas: true,
  Courier: true,
  'Nanum Gothic Coding': true,
  Cousine: true,
};

/**
 * Checks if the font specified by the text style is a font used to format code.
 * @param {Schema$TextStyle} textStyle
 * @returns {boolean} {@code true} if the font is a code font.
 */
function isCodeFont({ weightedFontFamily }) {
  if (!weightedFontFamily) {
    return false;
  }
  const { fontFamily } = weightedFontFamily;
  return (fontFamily in CODE_FONTS || fontFamily.match(/\sMono/));
}

/**
 * Processes an array of structural elements.
 *
 * @param {Document} doc - the google document
 * @param {StructuralElement[]} structuralElements - the content of the document body or table cell
 * @param {boolean} isTableCell - indicates whether a table cell is processed.
 * @returns the markdown representation.
 */
function processStructuralElements(doc, structuralElements, isTableCell = false) {
  let md = '';
  let wasBullet = false;
  let wasHeading = true;
  const blockCode = [];
  const lf = isTableCell ? ' ' : '\n'; // ignore line feeds in table cells.

  const escapeCode = (txt) => (txt.indexOf('`') >= 0 ? `\`\`${txt}\`\`` : `\`${txt}\``);

  // code is gathered outside the paragraph loop, so that multiple code paragraphs generate one
  // multiline code block. this is what happens when copy-pasting code into a google docs.
  const flushCode = (code) => {
    if (code.length === 0) {
      return '';
    }
    let txt = '';
    if (code.length === 1) {
      txt = escapeCode(code[0]);
    } else if (isTableCell) {
      txt = escapeCode(code.join(' '));
    } else {
      txt = `\`\`\`\n${code.join('\n')}\n\`\`\``;
    }
    code.splice(0, code.length);
    return txt;
  };

  structuralElements.forEach((el, elIdx) => {
    if ('paragraph' in el) {
      const par = el.paragraph;
      const style = par.paragraphStyle.namedStyleType;
      const heading = HEADINGS[style] || '';
      let currentStyles = [];
      let trailing = ''; // remembers trailing white space
      const isBullet = 'bullet' in par;
      let numTexts = 0;

      // flush code in bullet
      if (isBullet || wasBullet) {
        const cd = flushCode(blockCode);
        if (cd) {
          md += `${cd}${lf}`;
        }
      }

      if (isBullet) {
        if (!wasBullet) {
          md += lf;
        }
        // assume no bullet with heading
        const blt = par.bullet;
        const lvl = blt.nestingLevel || 0;
        md += `${'    '.repeat(lvl)}`;
        const list = doc.lists[blt.listId];
        let symbol = '- ';
        if (list) {
          const { nestingLevels } = list.listProperties;
          const level = nestingLevels[blt.nestingLevel || 0];
          if (level) {
            if (level.glyphType) {
              symbol = '1. ';
            }
          }
        }
        md += symbol;
      } else {
        // insert a new line before new heading, between paragraphs and after lists
        // eslint-disable-next-line no-lonely-if
        if ((heading && md) || (!wasHeading && blockCode.length === 0) || wasBullet) {
          md += lf;
        }
      }
      wasHeading = heading;
      wasBullet = isBullet;

      let p = '';
      let pCode = [];
      par.elements.forEach((pel) => {
        if ('textRun' in pel) {
          const tr = pel.textRun;
          const ts = tr.textStyle;
          const isCode = isCodeFont(ts);

          // remove trailing new line
          const content = tr.content.replace(/\n$/gm, '');
          if (content) {
            numTexts += 1;
          }

          // split along the soft breaks
          content.split(/\u000b/gu).forEach((text, idx) => {
            if (isCode) {
              if (pCode.length > 0) {
                if (idx === 0) {
                  pCode[pCode.length - 1] += text; // multiple code formats on the same
                } else {
                  pCode.push(text);
                }
              } else {
                // turn styles off
                p += currentStyles.reduceRight((c, s) => c + s.off, '');
                currentStyles = [];
                p += trailing;
                trailing = ''; // all whitespace in code are relevant
                pCode.push(text);
              }
            } else {
              if (blockCode.length > 0) {
                blockCode.push(...pCode);
                pCode.splice(0, pCode.length);
                // flush any block of code before this paragraph
                const cd = flushCode(blockCode);
                md += cd;
                if (heading && cd) {
                  md += `${lf}${lf}`;
                }
              }

              // special case, if code was just before a softbreak
              if (pCode.length === 2 && !pCode[1]) {
                p += `${escapeCode(pCode[0])}  ${lf}`;
                pCode = [];
              }
              p += flushCode(pCode);

              // markdown does not allow whitespace between format characters and words
              // so extract the leading and trailing whitespace
              // eslint-disable-next-line prefer-const
              let [, pre, mid, post] = /^(\s*)(.*?)(\s*?)$/.exec(text);

              // first, turn styles off that are not in text style
              const activeStyles = {};
              for (let i = currentStyles.length - 1; i >= 0; i -= 1) {
                const s = currentStyles[i];
                if (!ts[s.name]) {
                  p += s.off;
                  currentStyles.splice(i, 1);
                } else {
                  activeStyles[s.name] = true;
                }
              }
              // then add the previous trailing whitespace
              p += trailing;

              // if there was a manual break before, add the new line
              if (idx > 0) {
                p += `  ${lf}`;
              }

              // leading whitespace
              p += pre;

              // don't turn on styles for empty text
              if (mid.length === 0) {
                trailing = post;
                return;
              }

              // turn styles on
              Object.keys(ts).forEach((s) => {
                if (ts[s]) {
                  if (s === 'underline' && ts.link) {
                    // ignore underline for links
                    mid = `[${mid}](${ts.link.url})`;
                    return;
                  }
                  if (activeStyles[s]) {
                    return;
                  }
                  if (s === 'baselineOffset') {
                    // for sub- and superscript, use the baselineOffset value as style name.
                    // eslint-disable-next-line no-param-reassign
                    s = ts[s];
                  }
                  const mdStyle = TEXT_STYLES[s];
                  if (mdStyle) {
                    p += mdStyle.on;
                    currentStyles.push(mdStyle);
                  }
                }
              });

              // add the mid text
              p += mid;

              // remember trailing ws
              trailing = post;
            }
          });
        } else if ('autoText' in pel) {
          // todo
        } else if ('pageBreak' in pel) {
          p += '\n\n---\n\n';
        } else if ('columnBreak' in pel) {
          // todo
        } else if ('footnoteReference' in pel) {
          // todo
        } else if ('horizontalRule' in pel) {
          p += '\n\n---\n\n';
        } else if ('equation' in pel) {
          // todo
        } else if ('inlineObjectElement' in pel) {
          const id = pel.inlineObjectElement.inlineObjectId;
          const inlineObject = doc.inlineObjects[id];
          const { embeddedObject } = inlineObject.inlineObjectProperties;
          if ('imageProperties' in embeddedObject) {
            numTexts += 1;
            const { imageProperties, title } = embeddedObject;
            p += trailing;
            trailing = ' ';
            p += `![${title || ''}](${imageProperties.contentUri})`;
          } else {
            // console.warn('unsupported embedded object ');
          }
        } else {
          // n/a - should not happen
        }
      });

      // end of paragraph
      if (pCode.length > 0) {
        if (numTexts > 1) {
          // inline code at end of paragraph.
          p += `${trailing}${flushCode(pCode)}`;
        } else {
          // single line code
          blockCode.push(...pCode);
        }
      }
      if (blockCode.length === 0) {
        // turn styles off
        p += currentStyles.reduceRight((c, s) => c + s.off, '');
        p += `${trailing}`;

        // ignore empty heading
        if (heading && numTexts > 0) {
          md += `${heading + p.replace('\n', '<br>')}${lf}`;
        } else {
          md += `${p}${lf}`;
        }
      }
    } else if ('sectionBreak' in el) {
      if (elIdx > 0) {
        // ignore the very first section break
        md += '\n---\n\n';
      }
    } else if ('table' in el) {
      // make sure there is an empty line before the table
      if (!md.endsWith('\n\n')) {
        md += '\n';
      }
      el.table.tableRows.forEach((row, rowIdx) => {
        let separator = '';
        row.tableCells.forEach((cell, cellIdx) => {
          if (cellIdx === 0) {
            md += '|';
          }
          const txt = processStructuralElements(doc, cell.content, true);
          md += `${txt}|`;

          // this is a bit a hack to get the alignments from the first row of cells
          if (rowIdx === 0) {
            separator += '|';
            const ps = cell.content[0]
              && cell.content[0].paragraph
              && cell.content[0].paragraph.paragraphStyle
              && cell.content[0].paragraph.paragraphStyle.alignment;
            if (ps === 'CENTER') {
              separator += ':';
            }
            separator += '-'.repeat(Math.min(txt.length, 10));
            if (ps === 'CENTER' || ps === 'END') {
              separator += ':';
            }
          }
        });
        if (separator) {
          md += `\n${separator}|`;
        }
        md += '\n';
      });
    } else {
      // n/a - should not happen
    }
  });
  md += flushCode(blockCode);
  return md;
}

/**
 * Converts a google docs json to markdown.
 * @see https://developers.google.com/docs/api/reference/rest/v1/documents#Document
 *
 * @param {Document} doc - the google document
 * @returns the markdown representation.
 */
function docs2markdown(doc) {
  return processStructuralElements(doc, doc.body.content);
}

module.exports = docs2markdown;
