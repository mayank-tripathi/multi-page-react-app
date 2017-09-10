var path = require('path');
require('./base.webpack.config')

module.exports = Object.assign({}, config, {
  entry: [
    './src/views/about.tsx'
  ],
  output: {
    filename: 'about.js',
    path: path.resolve('dist/views/')
  }
});