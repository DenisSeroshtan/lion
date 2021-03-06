'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js:process'));
    $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch(['./source/template/**/*.pug', './content.json'], $.gulp.series('pug'));
    $.gulp.watch('./source/img/**/*.*', $.gulp.series('image'));
    $.gulp.watch('./source/fonts/**/*.*', $.gulp.series('fonts')); 
    $.gulp.watch('./source/svg/**/*.*', $.gulp.series('sprite:svg'));
  });
};
