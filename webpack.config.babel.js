
// @TODO Clean up this file a bit more. Comments.

import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const app = path.resolve(__dirname, 'app');
const nodeModules = path.resolve(__dirname, 'node_modules');

const BUILD = process.env.npm_lifecycle_event === 'build';
// const DEV = process.env.npm_lifecycle_event === 'dev';

// Webpack Plugins
const plugins = [
  new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  new HtmlWebpackPlugin({
    title: 'React Boilerplate',
  }),
];

// Build-only Webpack Plugins
if (BUILD) {
  plugins.push(
    // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
    // Only emit files when there are no errors
    new webpack.NoErrorsPlugin(),

    // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
    // Dedupe modules in the output
    new webpack.optimize.DedupePlugin(),

    // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    // Minify all javascript, switch loaders to minimizing mode
    new webpack.optimize.UglifyJsPlugin()
  );
}

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
      'axios',
      'enroute',
      'react',
      'react-dom',
      'redux-logger',
      'redux-routes',
      'socrates',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: BUILD ? './' : 'http://localhost:8080/',
  },
  module: {
    loaders: [
      {
        test: /\.(js||jsx)$/,
        loaders: ['babel-loader'],
        exclude: nodeModules,
      },
    ],
    devServer: {
      contentBase: './dist',
      stats: {
        modules: false,
        cached: false,
        colors: true,
        chunk: false,
      },
    },
  },
  plugins,
};
