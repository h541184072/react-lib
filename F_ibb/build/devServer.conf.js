const path = require('path');
const projectConfig = require('./projectConfig');
const {publicPath , port } = projectConfig;
const host = require('./getLocalIp');


module.exports = {
    contentBase: [ path.resolve('./src') ] ,
    port ,
    publicPath ,
    historyApiFallback: {
        rewrites: [
            {
                from: new RegExp(`^${publicPath}`) ,
                to: `${publicPath}index.html`
            }
        ]
    } ,
    compress: true ,
    hot: true ,
    host,
    open: true ,
    openPage: publicPath.slice(1) ,
    inline: true ,
    noInfo: true ,
    quiet: true ,
    clientLogLevel: 'none' ,
    overlay: {
        warnings: true ,
        errors: true
    }
    /*
     代理 需要针对项目配置 如果代理到sso 请打开本行注释
     proxy: [
     {
     //要代理的地址 此规则用！取反
     context: [ `!${publicPath}**` ] ,
     //要代理的目标 （默认开发环境）
     target: 'http://192.168.105.130' ,
     //是否更改源
     changeOrigin: true ,
     //路径重写
     pathRewrite: {
     '^/$': ''
     } ,
     //cookie域名重写
     cookieDomainRewrite: host
     }
     ]
     */
};
