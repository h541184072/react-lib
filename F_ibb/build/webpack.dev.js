const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlPlugin = require('html-webpack-plugin');
const devServer = require('./devServer.conf');
const webpackBaseConfig = require('./webpack.common');
const path = require('path');
const {siteTitle} = require('./projectConfig');

module.exports = webpackMerge(webpackBaseConfig , {
    output: {
        filename: 'assets/js/[name].js'
    } ,
    module: {
        rules: [
            {
                test: /\.css$/ ,
                loaders: [ 'style' , 'css' ]
            } ,
            {
                test: /\.scss$/ ,
                loaders: [ 'style' , 'css' , 'sass' ]
            } ,
            {
                test: /\.less/ ,
                loaders: [ 'style' , 'css' , 'less' ]
            }
        ]
    } ,
    plugins: [
        new webpack.HotModuleReplacementPlugin() ,
        new HtmlPlugin({
            template: path.resolve('./template/dev.html') ,
            filename: 'index.html' ,
            title: siteTitle
        })
    ] ,
    devtool: 'cheap-module-source-map' ,
    mode: 'development' ,
    devServer
});

