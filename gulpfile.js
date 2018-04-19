var gulp = require('gulp'),
    watch = require('gulp-watch')
    postcss = require('gulp-postcss')
    autoprefixer = require('autoprefixer'),
    nested = require('postcss-nested'),
    cssvars = require('postcss-simple-vars'),
    cssImport = require('postcss-import'),
    browserSync = require('browser-sync').create();

gulp.task('default', function() {
    console.log('default task called');
});

gulp.task('html', function() {
    console.log('html task called');
});

gulp.task('styles', function() {
    // console.log('styles task called');
    return gulp.src('./app/css/styles.css')
        .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/dist/css'));
});

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