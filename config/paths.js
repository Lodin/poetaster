const path = require('path');

const root = path.resolve(__dirname, '..');

module.exports = {
  bower: path.resolve(root, 'bower_components'),
  build: path.resolve(root, 'build'),
  cache: path.resolve(root, '.cache'),
  html: path.resolve(root, 'public/index.html'),
  index: path.resolve(root, 'src/index.ts'),
  nodeModules: path.resolve(root, 'node_modules'),
  polymer: path.resolve(root, 'src/polymer.ts'),
  stylelintrc: path.resolve(root, '.stylelintrc'),
  test: path.resolve(root, 'src/test.ts'),
  typings: path.resolve(root, 'typings'),
  tsconfig: path.resolve(root, 'tsconfig.json')
};
