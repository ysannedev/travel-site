var gulp = require('gulp'), /* require method is provided by Node */
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function() {

    browserSync.init({ /* configurations for browserSync */
        notify: false, /* removes notifications in upper right corner */
        server: {
            baseDir: 'app' /* what folder to show in browser */
        }
    })

    watch('./app/index.html', function() { /* watches file specified for changes */
        // gulp.start('html');
        // return gulp.src('./app/index.html')
        //     .pipe(browserSync.stream());
        browserSync.reload();
    });

    watch('./app/css/**/*.css', function() { /* watches file specified for changes */
        // gulp.start('styles');
        gulp.start('cssInject');
    });

    watch('./app/js/**/*.js', function() { /* watches file specified for changes */
        gulp.start('scriptsRefresh');
    });

});

gulp.task('cssInject', ['styles'], function() { /* update browserSync after css files finished compiling */
    return gulp.src('./app/css/styles.css') 
        .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() { /* update browserSync after js files finished compiling */
    browserSync.reload();
});