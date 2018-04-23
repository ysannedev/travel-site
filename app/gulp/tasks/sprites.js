var gulp = require('gulp'), /* require method is provided by Node */
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    del = require('del');

var config = { /* gulp-svg-sprite config */
    mode: {
        css: {
            sprite: 'sprite.svg', /* renames sprite graphic file */
            render: {
                css: {
                    template: './app/gulp/template/sprite.css' /* points to css template for each graphic. provides width, height, and position */
                }
            }
        }
    }
};

gulp.task('beginClean', function() { /* deletes assets sprite folder. the eventual folder where the svg sprite will live*/
    return del('./app/assets/sprite');
});

gulp.task('createSprite', ['beginClean'], function() {  /* createSprite depends on beginClean. beginClean must complete before createSprite */
    return gulp.src('./app/assets/icons/**/*.svg') /* source is the icons folder in assets/icons  */
        .pipe(svgSprite(config)) /* gulp-svg-sprite config */
        .pipe(gulp.dest('./app/dist/sprite/')); /* destination folder is dist folder */
});

gulp.task('copySpriteGraphic', ['createSprite'], function() { /* copies svg sprite from dist to assets. createSprite must complete before copySpriteGraphic */
    return gulp.src('./app/dist/sprite/css/*.svg') /* gets svg sprite from destination folder of createSprite */
        .pipe(gulp.dest('./app/assets/sprite/')); /* outputs to assets folder */
});

gulp.task('copySpriteCSS', ['createSprite'], function() { /* copies svg sprite CSS from dist to assets. createSprite must complete before copySpriteCSS */
    return gulp.src('./app/dist/sprite/css/*.css') /* gets svg sprite CSS from destination folder of createSprite */
        .pipe(rename('_sprite.css')) /* rename to fit partial naming convention */
        .pipe(gulp.dest('./app/css/modules/')); /* outputs to css modules */
});

gulp.task('finishClean', ['copySpriteGraphic', 'copySpriteCSS'], function() { /* deletes dist folder after svg graphic and CSS copied to assets folder */
    return del('./app/dist/sprite'); 
});

/* the ultimate task of sprite.js - the one used in terminal */
gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'finishClean']);