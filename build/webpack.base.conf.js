const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'
module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/main.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions: ['*', '.js', '.json', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(css|less)$/,
                use: [
                    devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                  'css-loader',
                  'postcss-loader',
                  'less-loader'
                ],
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            allChunks: true
        })
    ]
}