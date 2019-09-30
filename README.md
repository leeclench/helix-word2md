# DRAFT - POC - WIP


----



# Helix Word to Markdown

> A service that converts word documents to markdown.

## Status
[![codecov](https://img.shields.io/codecov/c/github/adobe/helix-word2md.svg)](https://codecov.io/gh/adobe/helix-word2md)
[![CircleCI](https://img.shields.io/circleci/project/github/adobe/helix-word2md.svg)](https://circleci.com/gh/adobe/helix-word2md)
[![GitHub license](https://img.shields.io/github/license/adobe/helix-word2md.svg)](https://github.com/adobe/helix-word2md/blob/master/LICENSE.txt)
[![GitHub issues](https://img.shields.io/github/issues/adobe/helix-word2md.svg)](https://github.com/adobe/helix-word2md/issues)
[![LGTM Code Quality Grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/adobe/helix-word2md.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/adobe/helix-word2md)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Greenkeeper badge](https://badges.greenkeeper.io/adobe/helix-word2md.svg)](https://greenkeeper.io/)

## Installation

## Usage

```bash
curl https://adobeioruntime.net/api/v1/web/helix/helix-services/word2md@v1
```

## Authentication

...

## Development

### Deploying Helix Word to Markdown

Deploying a helix service requires the `wsk` command line client, authenticated to a namespace of your choice. For Project Helix, we use the `helix` namespace.

All commits to master that pass the testing will be deployed automatically. All commits to branches that will pass the testing will get commited as `/helix-services/gdocs2md@ci<num>` and tagged with the CI build number.
