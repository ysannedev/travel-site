var path = require('path'); /* require method is provided by Node */

/* the starting point file for javascript. the final file, the one compiled/bundled by webpack, injects js files in the correct order according to their dependencies/imports */
module.exports = {
    entry: {
        App: './app/js/App.js',
        Vendor: './app/js/Vendor.js'
    },
    output: {
        path: path.resolve(__dirname, 'app/temp/js'),
        // path: __dirname + 'app/temp/js',
        // path: './app/temp/js',
        // publicPath: 'app/temp/js',
        filename: '[name].js'
    },
    module: {
        loaders: [ /* loaders are used for transforming */
            {
                test: /\.js$/, /* condition for file transformation */
                exclude: /node_modules/, /* prevents transforming js files in node_modules */
                loader: 'babel-loader', /* transforming package */
                query: {
                    presets: ['es2015'] /* ES6 preset. rewrites js files to ES5 that many browsers support */
                }
            }
        ]
    }
}