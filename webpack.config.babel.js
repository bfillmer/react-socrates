
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const app = path.resolve(__dirname, 'app');
const nodeModules = path.resolve(__dirname, 'node_modules');

const BUILD = process.env.npm_lifecycle_event === 'build';
const DEV = process.env.npm_lifecycle_event === 'dev';

// Node-managed vendors for concatenating into the vendors.js file.
const vendors = [
  'axios',
  'classnames',
  'enroute',
  'react',
  'react-dom',
  'redux-logger',
  'redux-routes',
  'socrates',
];

// Webpack Plugins
const plugins = [
  // Reference: http://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
  // Seperate out vendor libraries into a separate file.
  new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),

  // Reference: https://www.npmjs.com/package/html-webpack-plugin
  // Create our HTML on the fly.
  new HtmlWebpackPlugin({
    title: 'React Boilerplate',
  }),
];

// Build-only Webpack Plugins
if (BUILD) {
  plugins.push(

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),

    // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
    // Only emit files when there are no errors
    new webpack.NoErrorsPlugin(),

    // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
    // Dedupe modules in the output
    new webpack.optimize.DedupePlugin(),

    // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    // Minify all javascript, switch loaders to minimizing mode
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
      },
      comments: false,
      sourceMap: false,
    })
  );
}

// Primary configuration.
const config = {
  devtool: BUILD ? 'cheap-module-source-map' : 'eval',
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
    vendors,
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
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url?limit=10000',
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
    ],
  },
  plugins,
};

// Additional dev server configuration.
if (DEV) {
  config.devServer = {
    contentBase: './dist',
    stats: {
      modules: false,
      cached: false,
    },
  };
}

module.exports = config;
