var path = require('path'); /* require method is provided by Node */

module.exports = {
    entry: './app/js/app.js', /* the starting point file for javascript. the final file, the one compiled/bundled by webpack, injects js files in the correct order according to their dependencies/imports */
    output: {
        path: path.resolve(__dirname, 'app/dist/js'),
        // publicPath: 'app/dist/js',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [ /* loaders are used for transforming */
            {
                test: /\.js$/, /* condition for file transformation */
                loader: 'babel-loader', /* transforming package */
                query: {
                    presets: ['es2015'] /* ES6 preset. rewrites js files to ES5 that many browsers support */
                },
                exclude: '/node_modules/' /* prevents transforming js files in node_modules */
            }
        ]
    }
}