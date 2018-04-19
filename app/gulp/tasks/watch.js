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
        gulp.start('html');
    });

    watch('./app/css/**/*.css', function() {
        // gulp.start('styles');
        gulp.start('cssInject');
    });

});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/css/styles.css')
        .pipe(browserSync.stream());
});