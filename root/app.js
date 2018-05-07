'use strict'
const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const env = process.env.SPIKE_ENV

module.exports = {
    devtool: 'source-map',
    ignore: [
        '**/_*',
        '**/.*',
        '**/*.md',
        'license',
        'yarn.lock',
        'package-lock.json',
        '.vscode/*',
        '.idea/*',
    ],
    reshape: htmlStandards({
        locals: ctx => {
            return { pageId: pageId(ctx), foo: 'bar' }
        },
        minify: env === 'production',
    }),
    postcss: cssStandards({
        minify: env === 'production',
        warnForDuplicates: env !== 'production',
    }),
    babel: jsStandards(),
}
