var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './app/scripts/main.js',
  output: { path: __dirname, filename: 'src/media/scripts/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: ['babel-loader'],
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }      
    ]
  }
};