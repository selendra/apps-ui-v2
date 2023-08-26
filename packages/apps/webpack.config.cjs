// Copyright 2017-2023 @polkadot/apps authors & contributors
// SPDX-License-Identifier: Apache-2.0

const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const { SubresourceIntegrityPlugin } = require('webpack-subresource-integrity');

const baseConfig = require('./webpack.base.cjs');

const context = __dirname;
const hasPublic = fs.existsSync(path.join(context, 'public'));

module.exports = merge(
  baseConfig(context),
  {
    devtool: process.env.BUILD_ANALYZE ? 'source-map' : false,
    output: {
      crossOriginLoading: 'anonymous'
    },
    plugins: [
      new SubresourceIntegrityPlugin(),
      new HtmlWebpackPlugin({
<<<<<<< HEAD
        PAGE_TITLE: 'Selendra Portal',
=======
        PAGE_TITLE: 'Polkadot/Substrate Portal',
>>>>>>> ee79dc8ca86484d8700d24a4be0f001360f84b4f
        minify: false,
        template: path.join(context, `${hasPublic ? 'public/' : ''}index.html`)
      })
    ]
  }
);
