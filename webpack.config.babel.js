
import path from 'path';

const app = path.resolve(__dirname, 'app');

module.exports = {
  entry: [
    path.resolve(app, 'index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      {
        test: /\.(js||jsx)$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    root: app,
    extensions: [
      '',
      '.js',
      '.jsx',
    ],
  },
};
