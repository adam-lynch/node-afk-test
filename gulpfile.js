var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('default', function(){
    gulp.src([
        './index.html',
        './package.json',
        './node_modules/**/**'
    ], {base: './'})
        .pipe($.zip('test.nw'))
        .pipe(gulp.dest('./'));
});