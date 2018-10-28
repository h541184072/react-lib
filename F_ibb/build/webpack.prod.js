
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.build');
const UglifyJs = require('uglifyjs-webpack-plugin');
const UglifyCss = require('optimize-css-assets-webpack-plugin');
const safeParser = require('postcss-safe-parser');

module.exports = webpackMerge(webpackBaseConfig , {
    optimization: {
        splitChunks: {
            name: 'vendors' ,
            chunks: 'initial'
        } ,
        runtimeChunk: {
            name: 'runtime'
        } ,
        minimizer: [
            new UglifyJs({
                parallel: true ,
                uglifyOptions: {
                    compress: {
                        warnings: false ,
                        drop_console: true ,
                        drop_debugger: true
                    } ,
                    output: {
                        comments: false
                    }
                }
            }) ,
            new UglifyCss({
                cssProcessorOptions: {
                    parser: safeParser ,
                    discardComments: {removeAll: true}
                }
            })
        ]
    }
});