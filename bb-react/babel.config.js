module.exports = {
    presets: [
        '@babel/react',
        [
            '@babel/env',
            {
                modules: false,
                useBuiltIns: 'usage',
                targets: {
                    "chrome": "58"
                }
            }
        ]
    ]
};
