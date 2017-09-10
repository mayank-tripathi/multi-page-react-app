var path = require('path');
require('./base.webpack.config')

module.exports = Object.assign({}, config, {
  entry: [
    './src/views/home.tsx'
  ],
  output: {
    filename: 'home.js',
    path: path.resolve('dist/views/')
  }
});