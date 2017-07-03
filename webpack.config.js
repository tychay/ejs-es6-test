var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    'bundle': './test.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false}
    })
  ],
  module: {
    rules: [
      {
        loader: 'ejs-loader',
        test: /\.ejs$/
      },
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.js$/,
        options: {
          presets: [
            ['env', {modules: false}]
          ],
          cacheDirectory: true,
        }
      }
    ]
  }
};
