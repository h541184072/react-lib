module.exports = {
    presets: [
        '@babel/react' ,
        [
            '@babel/env' ,
            {
                modules: false ,
                useBuiltIns: 'usage' ,
                targets: {
                    browsers: [
                        'ie >= 10'
                    ]
                }
            }
        ]
    ] ,
    plugins: [
        'styled-components' ,
        '@babel/syntax-dynamic-import' ,
        '@babel/transform-runtime' ,
        '@babel/proposal-do-expressions' ,
        '@babel/proposal-optional-chaining' ,
        '@babel/proposal-nullish-coalescing-operator' ,
        '@babel/proposal-throw-expressions' ,
        '@babel/proposal-export-default-from' ,
        '@babel/proposal-export-namespace-from' ,
        '@babel/proposal-function-bind' ,
        [
            '@babel/proposal-decorators' ,
            {
                legacy: true
            }
        ] ,
        [
            '@babel/proposal-class-properties' ,
            {
                loose: true
            }
        ]
    ]
};
