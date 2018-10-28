const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.common');
const CleanPlugin = require('clean-webpack-plugin');
const CssToFile = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
const projectConfig = require('./projectConfig');

const filename = 'assets/js/[name].[chunkhash:7].js';
const distPath = path.resolve(projectConfig.distPath);
const {loader: exLoader} = CssToFile;

module.exports = webpackMerge(
    webpackBaseConfig ,
    {
        output: {
            filename ,
            chunkFilename: filename ,
            path: distPath
        } ,
        module: {
            rules: [
                {
                    test: /\.css$/ ,
                    use: [
                        {
                            loader: exLoader
                        } ,
                        {
                            loader: 'css'
                        }
                    ]
                } ,
                {
                    test: /\.scss$/ ,
                    use: [
                        {
                            loader: exLoader
                        } ,
                        {
                            loader: 'css'
                        } ,
                        {
                            loader: 'sass'
                        }
                    ]
                }
            ]
        } ,
        mode: 'production' ,
        plugins: [
            new CleanPlugin([ distPath ] , {allowExternal: true}) ,
            new CssToFile({
                filename: 'assets/style/[name].[contenthash:7].css' ,
                allChunks: true
            }) ,
            new HtmlPlugin({
                template: path.resolve('./template/prod.html') ,
                filename: 'index.html' ,
                title: projectConfig.siteTitle ,
                minify: {
                    removeComments: true ,
                    collapseWhitespace: true ,
                    removeScriptTypeAttributes: true ,
                    removeStyleLinkTypeAttributes: true ,
                    removeAttributeQuotes: true
                }
            })
        ] ,
        // externals: {
        //     'antd': 'antd' ,
        //     'react': 'React' ,
        //     'react-dom': 'ReactDOM' ,
        //     'react-router-dom': 'ReactRouterDOM' ,
        //     'redux': 'Redux' ,
        //     'react-redux': 'ReactRedux' ,
        //     'redux-thunk': 'ReduxThunk' ,
        //     'history': 'history' ,
        //     'lodash': '_' ,
        //     'classnames': 'classNames' ,
        //     'seamless-immutable': 'Immutable' ,
        //     'moment': 'moment' ,
        //     'minireset.css': 'minireset.css'
        // }
    }
);