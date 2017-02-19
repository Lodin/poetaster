const webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const paths = require('./paths');

module.exports = {
  entry: [
    paths.index
  ],
  output: {
    path: paths.build
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'tslint-loader',
        include: paths.src,
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        include: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: paths.cache
        }
      },
      {
        test: /\.html$/,
        loader: 'wc-loader',
        include: [
          /bower_components/
        ]
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'to-string-loader'},
          {
            loader: 'css-loader',
            query: {
              importLoaders: 1,
              minimize: true
            }
          },
          {loader: 'postcss-loader'}
        ],
        exclude: /assets/
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            query: {
              importLoaders: 1,
              minimize: true
            }
          },
          {loader: 'postcss-loader'},
        ],
        include: /assets/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'static/fonts/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|webp|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'static/images/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new StyleLintPlugin({
      configFile: paths.stylelintrc,
      files: ['src/**/*.css']
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: paths.index,
        output: {
          path: paths.build
        },
        postcss: [
          require('postcss-easy-import')({
            prefix: '_'
          })
        ]
      }
    })
  ],
  node: {
    fs: 'empty',
    global: true,
    crypto: 'empty',
    tls: 'empty',
    net: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
