const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.conf');
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new FriendlyErrorsPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    hot:true,
    overlay:false,
    quiet: true, // necessary for FriendlyErrorsPlugin
    clientLogLevel: "none"
   
  }
});