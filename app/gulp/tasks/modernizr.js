var gulp = require('gulp');
    modernizr = require('gulp-modernizr');

gulp.task('modernizr', function() { /* check if user's browsers supports svg's and adds a corresponding class to the html tag*/
    return gulp.src(['./app/css/**/*.css', './app/js/**/*.js'])
        .pipe(modernizr({
            'options': [
                'setClasses'
            ]
        }))
        .pipe(gulp.dest('./app/dist/js/'));
});