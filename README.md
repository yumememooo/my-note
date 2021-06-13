# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### 部署指令
npm run deploy

### clear
npm run clear
npm start

### markdown前言
[相關的markdown前言](https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-frontmatter)
```
---
id: doc-markdown
title: Markdown 功能特性
hide_title: false
hide_table_of_contents: false
sidebar_label: Markdown :)
custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: 我没法解决问题时该怎么联系你
keywords:
  - 文档
  - Docusaurus
image: https://i.imgur.com/mErPwqL.png
slug: /myDoc
---
我的 Markdown 文档内容

```