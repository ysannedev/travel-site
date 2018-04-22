var path = require('path');

module.exports = {
    entry: './app/js/app.js',
    output: {
        path: path.resolve(__dirname, 'app/dist/js'),
        // publicPath: 'app/dist/js',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                exclude: '/node_modules/'
            }
        ]
    }
}