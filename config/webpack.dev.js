const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const env = require('./env').dev;
const paths = require('./paths');
const WebpackConfig = require('./webpack.common');

const publicPath = '/';

module.exports = Object.assign({}, WebpackConfig, {
  devtool: 'source-maps',
  output: Object.assign({}, WebpackConfig.output, {
    filename: 'static/js/[name].[hash:8].js',
    pathinfo: true,
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
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    }),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.nodeModules)
  ],
  devServer: {
    contentBase: './dist',
    port: 3000,
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
