
import path from 'path';
import webpack from 'webpack';

const app = path.resolve(__dirname, 'app');
const nodeModules = path.resolve(__dirname, 'node_modules');

module.exports = {
  resolve: {
    root: app,
    extensions: [
      '',
      '.js',
      '.jsx',
    ],
  },
  entry: {
    app: path.resolve(app, 'index.js'),
    vendors: [
      'immutable',
      'react',
      'react-dom',
      'socrates',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      {
        test: /\.(js||jsx)$/,
        loaders: ['babel-loader'],
        exclude: nodeModules,
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  ],

};
