const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.build');
const Visualizer = require('webpack-visualizer-plugin');
const UglifyJs = require('uglifyjs-webpack-plugin');
const UglifyCss = require('optimize-css-assets-webpack-plugin');
const safeParser = require('postcss-safe-parser');

module.exports = webpackMerge(webpackBaseConfig , {
    //devtool: 'cheap-module-source-map' ,
    plugins: [
        new Visualizer()
    ] ,
    optimization: {
        splitChunks: {
            name: 'vendors' ,
            chunks: 'initial'
            // cacheGroups: {
            //     styles: {
            //         name: 'vendors' ,
            //         test: /\.(style|less)$/ ,
            //         chunks: 'initial' ,
            //         enforce: true
            //     }
            // }
        } ,
        runtimeChunk: {
            name: 'runtime'
        } ,
        minimizer: [
            new UglifyJs({
                parallel: true ,
                sourceMap: true ,
                uglifyOptions: {
                    compress: {
                        warnings: false
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

