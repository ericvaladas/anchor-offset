const path = require('path');
const webpack = require('webpack');
const manifest = require('./package.json');

const mainFile = manifest.main;
const packageName = manifest.name;

const webpackModule = {
  rules: [{
    test: /\.js$/,
    exclude: /node_modules/,
    use: ['babel-loader']
  }]
};

const webpackPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin()
];

const nodeConfig = {
  target: 'node',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js',
    library: packageName,
    libraryTarget: 'umd'
  },
  module: webpackModule,
  plugins: webpackPlugins

};

const webConfig = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'anchor-offset.js',
    library: 'anchorOffset',
    libraryExport: 'default'
  },
  module: webpackModule,
  plugins: webpackPlugins
};

module.exports = [nodeConfig, webConfig];
