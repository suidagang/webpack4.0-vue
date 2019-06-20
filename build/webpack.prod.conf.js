const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const baseConfig = require('./webpack.base.conf');




const webpackConfig = merge(baseConfig, {
  mode: 'production',
  devtool: 'cheap-source-map',
  module: {
    rules: []
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
});
if (process.env.npm_config_report) {
  const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
  webpackConfig.plugins.push(new BundleAnalyzerPlugin({
    analyzerHost: '127.0.0.1',
    analyzerPort: 8889,
  }));
}

module.exports = webpackConfig;