//webpack-bundle-analyzer配置
npm install --save-dev webpack-bundle-analyzer 
npm install cross-env –save -dev //解决 'NODE_ENV' 不是内部或外部命令，也不是可运行的程序或批处理文件 的报错
/* package.json文件中 */
"scripts": {
    "analyz": "cross-env NODE_ENV=production npm_config_report=true npm run build"
}

//MiniCssExtractPlugin配置
npm install --save-dev mini-css-extract-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'
 {
    test: /\.(css|less)$/,
    use: [
        devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'less-loader'
    ],
},
plugin:
new MiniCssExtractPlugin({
    filename: devMode ? '[name].css' : '[name].[hash].css',
    chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    allChunks: true
})

package.json
"scripts": {
    "build": "cross-env NODE_ENV=production node build/build.js",
    "dev": "cross-env NODE_ENV=development webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "analyz": "cross-env NODE_ENV=production npm_config_report=true npm run build"
}
