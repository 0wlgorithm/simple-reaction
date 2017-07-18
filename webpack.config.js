const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-cheap-source-emap',
    entry: path.resolve('./src/index.tsx'),
    output: {
        path: path.resolve('./dist'),
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve('./src/index.html') })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: [
                    'babel-loader',
                    'awesome-typescript-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.json',
            '.css',
            '.png',
            '.jpg'
        ],
        modules: [
            "src",
            "node_modules"
        ]
    }
}