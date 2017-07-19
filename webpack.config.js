const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-cheap-source-emap',
    entry: [
        'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
        path.resolve('./src/index.tsx'),
    ],
    output: {
        path: path.resolve('./dist'),
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve('./src/index.html') }),
        new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: [
                    'babel-loader',
                    'awesome-typescript-loader'
                ]
            },
            {
                test: /\.css$/,
                include: __dirname + './src',
                loaders: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ]
            },
            {
                test: /\.css$/,
                exclude: __dirname + './src',
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
                        },
                    },
                    'postcss-loader',
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