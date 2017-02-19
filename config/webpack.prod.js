const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const env = require('./env').prod;
const paths = require('./paths');

const WebpackConfig = require('./webpack.common');

if (process.env.NODE_ENV !== 'production') {
  throw new Error('Production builds must have NODE_ENV=production.');
}

const publicPath = '/';

module.exports = Object.assign({}, WebpackConfig, {
  bail: true,
  devtool: 'source-map',
  output: Object.assign({}, WebpackConfig.output, {
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath
  }),
  module: {
    rules: [
      ...WebpackConfig.module.rules,
      {
        test: /\.(ts|tsx)$/,
        include: paths.src,
        loader: 'awesome-typescript-loader',
        options: {
          configFileName: paths.tsconfig,
          forkChecker: true
        }
      }
    ]
  },
  plugins: [
    ...WebpackConfig.plugins,
    new InterpolateHtmlPlugin({
      PUBLIC_URL: env.publicUrl,
      APP_NAME: env.appName
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      template: paths.html,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    })
  ],
  devServer: {
    contentBase: './dist',
    port: 8080,
    quiet: false,
    noInfo: false,
    lazy: false,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: true,
      timings: false,
      chunks: false,
      chunkModules: false
    }
  }
});
