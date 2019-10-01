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
const crypto = require('crypto');
const fs = require('fs');
const express = require('express');
const cookieParser = require('cookie-parser');
const OneDrive = require('./../src/OneDrive.js');

require('dotenv').config();

const redirectUri = 'http://localhost:3000/token';

function createOneDriveClient() {
  const {
    AZURE_WORD2MD_CLIENT_ID: clientId,
    AZURE_WORD2MD_CLIENT_SECRET: clientSecret,
    AZURE_WORD2MD_REFRESH_TOKEN: refreshToken,
  } = process.env;

  let tokens = {};
  try {
    tokens = JSON.parse(fs.readFileSync('tokens.json', 'utf-8'));
  } catch (e) {
    // ignore
  }

  const {
    accessToken,
    expiresOn,
  } = tokens;

  return new OneDrive({
    clientId,
    clientSecret,
    refreshToken,
    accessToken,
    expiresOn,
  });
}
const drive = createOneDriveClient();

// register event handle to write back tokens.
drive.on('tokens', (tokens) => {
  fs.writeFileSync('tokens.json', JSON.stringify(tokens, null, 2), 'utf-8');
  console.log('updated "tokens.json" file.');
});

// setup express app

async function auth(req, res) {
  crypto.randomBytes(48, (ex, buf) => {
    const state = buf.toString('base64').replace(/\//g, '_').replace(/\+/g, '-');
    const authorizationUrl = drive.createLoginUrl(redirectUri, state);
    res.cookie('authstate', state);
    res.redirect(authorizationUrl);
  });
}

async function token(req, res) {
  if (req.cookies.authstate !== req.query.state) {
    res.send('error: state does not match');
    return;
  }
  try {
    await drive.aquireToken(redirectUri, req.query.code);
    res.redirect('/');
  } catch (e) {
    console.error(e);
    res.send(`error: ${e.message}`);
  }
}

async function root(req, res) {
  if (!drive.authenticated) {
    res.send('unauthorized. <a href="/auth">sign in</a>');
    return;
  }
  try {
    const result = await drive.me();
    res.setHeader('content-type', 'text/html; charset=utf-8');
    const html = [
      `welcome <b>${result.displayName}</b><br>`,
      '<form method="get" action="/list">',
      'Share link: <input name="l" size=40 value="https://adobe-my.sharepoint.com/personal/tripod_adobe_com/Documents/helix-content?csf=1&e=Fz6r5Z"><br>',
      '<button>list</button><br>',
      '</form>',
    ].join('\n');
    res.end(html);
  } catch (e) {
    console.error(e);
    res.status(500).send('Something broke!');
  }
}

async function listDocuments(req, res) {
  const { l } = req.query;
  if (!l) {
    res.end('no share lin provided.');
    return;
  }
  try {
    const pa = req.path.replace(/\/+$/, '');
    const rootItem = await drive.getDriveItemFromShareLink(l);
    const result = await drive.listChildren(rootItem, req.path);
    const list = result.value.map((entry) => {
      const e = {
        name: entry.name,
        id: entry.id,
        link: `/${entry.folder ? 'list' : 'md'}${pa}/${entry.name}`,
      };
      return e;
    });

    const html = list.map((e) => `<a href="${e.link}?l=${encodeURIComponent(l)})">${e.name}</a><br>`).join('\n');
    res.setHeader('content-type', 'text/html; charset=utf-8');
    res.end(html);
  } catch (e) {
    console.error(e);
    res.status(500)
      .send('Something broke!');
  }
}

async function md(req, res) {
  const { l } = req.query;
  if (!l) {
    res.end('no share lin provided.');
    return;
  }
  try {
    const rootItem = await drive.getDriveItemFromShareLink(l);
    const result = await drive.getDriveItem(rootItem, req.path, true);
    res.setHeader('content-type', 'application/octet-stream');
    res.send(result);
  } catch (e) {
    console.error(e);
    res.status(500)
      .send('Something broke!');
  }
}

function asyncHandler(fn) {
  return (req, res, next) => (Promise.resolve(fn(req, res, next)).catch(next));
}

const app = express();
app.use(cookieParser());


// generate login redirect
app.get('/auth', asyncHandler(auth));

// After consent is granted AAD redirects here.
app.get('/token', asyncHandler(token));


app.use('/list', express.Router().get('*', asyncHandler(listDocuments)));
app.use('/md', express.Router().get('*', asyncHandler(md)));
app.get('/', asyncHandler(root));

app.listen(3000, () => console.log(`Example app listening on port ${3000}!`));
