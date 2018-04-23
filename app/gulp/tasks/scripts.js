var gulp = require('gulp'), /* require method is provided by Node */
    webpack = require('webpack');

gulp.task('scripts', function(callback) { /* bc a stream (function chain with pipe method) is not returned, you pass callback as an argument to let gulp know the task does not return a stream AND when the task is complete by calling the callback function (callback()) */
    webpack(require('../../../webpack.config'), function(err, stats) { 
        if (err) {
            console.log(err.toString());
        }
        console.log(stats.toString());
        callback();
    });
})