var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    nested = require('postcss-nested'),
    cssvars = require('postcss-simple-vars'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins'),
    rgba = require('postcss-hexrgba');

gulp.task('styles', function() {
    // console.log('styles task called');
    return gulp.src('./app/css/styles.css')
        .pipe(postcss([cssImport, mixins, cssvars, nested, rgba, autoprefixer]))
        .on('error', function(err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/dist/css'));
});