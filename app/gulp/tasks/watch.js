var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function() {

    browserSync.init({
        notify: false,
        server: {
            baseDir: 'app'
        }
    })

    watch('./app/index.html', function() {
        // gulp.start('html');
        // return gulp.src('./app/index.html')
        //     .pipe(browserSync.stream());
        browserSync.reload();
    });

    watch('./app/css/**/*.css', function() {
        // gulp.start('styles');
        gulp.start('cssInject');
    });

    watch('./app/js/**/*.js', function() {
        gulp.start('scriptsRefresh');
    });

});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/css/styles.css')
        .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
    browserSync.reload();
});