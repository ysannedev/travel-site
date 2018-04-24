var gulp = require('gulp'), /* require method is provided by Node */
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
        .pipe(postcss([cssImport, mixins, cssvars, nested, rgba, autoprefixer])) /* list plugins you need from postcss */
        .on('error', function(err) {
            console.log(err.toString());
            this.emit('end'); /* lets gulp continue to next pipe */
        })
        .pipe(gulp.dest('./app/temp/css'));
});