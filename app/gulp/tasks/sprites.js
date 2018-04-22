var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    del = require('del');

var config = {
    mode: {
        css: {
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './app/gulp/template/sprite.css'
                }
            }
        }
    }
};

gulp.task('beginClean', function() {
    return del('./app/assets/sprite');
});

gulp.task('createSprite', ['beginClean'], function() {
    return gulp.src('./app/assets/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/dist/sprite/'));
});

gulp.task('copySpriteGraphic', ['createSprite'], function() {
    return gulp.src('./app/dist/sprite/css/*.svg')
        .pipe(gulp.dest('./app/assets/sprite/'));
});

gulp.task('copySpriteCSS', ['createSprite'], function() {
    return gulp.src('./app/dist/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/css/modules/'));
});

gulp.task('finishClean', ['copySpriteGraphic', 'copySpriteCSS'], function() {
    return del('./app/dist/sprite');
});

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'finishClean']);