const webpack = require('webpack');
const path = require('path');
const FriendlyErrors = require('friendly-errors-webpack-plugin');
const { publicPath, port, distPath } = require('./projectConfig');
const host = require('./getLocalIp');
const filename = 'assets/js/[name].[chunkhash:7].js';

module.exports = {
    entry: {
        app: './src/app.jsx'
    },
    output: {
        publicPath,
        path: path.resolve(distPath),
        filename,
        chunkFilename: filename
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel'
                    },
                    {
                        loader: 'eslint'
                    }
                ],
                include: [
                    path.resolve('./build/projectConfig.js'),
                    path.resolve('./src'),
                    path.resolve('./node_modules/build-dev-server-client')
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'file',
                options: {
                    name: 'assets/image/[name].[ext]?[hash:7]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'file',
                options: {
                    name: 'assets/media/[name].[ext]?[hash:7]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file',
                options: {
                    name: 'assets/font/[name].[ext]?[hash:7]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css', 'less'],
        alias: {
            src: path.resolve('./src'),
            model: path.resolve('./src/model'),
            view: path.resolve('./src/view'),
            component: path.resolve('./src/component'),
            router: path.resolve('./src/router'),
            assets: path.resolve('./src/assets'),
            utils: path.resolve('./src/utils')
        }
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.IS_DEV': process.env.BUILD_ENV === 'dev',
            'process.env.IS_TEST': process.env.BUILD_ENV === 'test',
            'process.env.IS_PROD': process.env.BUILD_ENV === 'prod'
        }),
        new FriendlyErrors({
            compilationSuccessInfo: {
                messages: [`编译成功 运行于http://${host}:${port}${publicPath}`]
            }
        })
    ]
};
