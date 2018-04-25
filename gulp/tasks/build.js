var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();   

gulp.task('previewDist', function() {
    browserSync.init({ /* configurations for browserSync */
        notify: false, /* removes notifications in upper right corner */
        server: {
            baseDir: 'docs' /* what folder to show in browser */
        }
    });
});

gulp.task('deleteDistFolder', ['sprites'], function() {
    return del('./docs');
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
    var pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/icons',
        '!./app/assets/icons/**',
        '!./app/assets/sprite/**',
        '!./app/css',
        '!./app/css/**',
        '!./app/js',
        '!./app/js/**',
        '!./app/temp',
        '!./app/temp/**'
    ]
    return gulp.src(pathsToCopy)
        .pipe(gulp.dest('./docs'));
});

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
    // return gulp.src(['./app/assets/images/**/*', '!./app/assets/icons', '!./app/assets/icons/**/*'])
    return gulp.src('./app/assets/images/**/*')
        .pipe(imagemin({
            progressive: true, /* opt jpg */
            interlaced: true, /* opt gif */
            multipass: true /* opt svg */
        }))
        .pipe(gulp.dest('./docs/assets/images'))
});

gulp.task('optimizeSprites', ['deleteDistFolder'], function() {
    // return gulp.src(['./app/assets/images/**/*', '!./app/assets/icons', '!./app/assets/icons/**/*'])
    return gulp.src('./app/assets/sprite/**/*')
        .pipe(imagemin({
            progressive: true, /* opt jpg */
            interlaced: true, /* opt gif */
            multipass: true /* opt svg */
        }))
        .pipe(gulp.dest('./docs/assets/sprite'))
});

gulp.task('useminTrigger', ['deleteDistFolder'], function() {
    gulp.start('useminTask');
});

gulp.task('useminTask', ['styles', 'scripts'], function() {
    return gulp.src('./app/index.html')
        .pipe(usemin({
            css: [function() {return rev()}, function() {return cssnano()}],
            js: [function() {return rev()}, function() {return uglify()}]
        }))
        .pipe(gulp.dest('./docs'));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'optimizeSprites', 'useminTrigger']);