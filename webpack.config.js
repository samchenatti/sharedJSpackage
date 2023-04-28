const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'greetings.js',
        globalObject: 'this',
        library: {
            name: 'greetings',
            type: 'umd',
        },
    },
};