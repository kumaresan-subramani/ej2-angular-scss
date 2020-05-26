const gulp = require('gulp');
const format = require('gulp-format-md');

gulp.task('format', () => {
  return gulp.src('README.md')
    .pipe(format())
    .pipe(gulp.dest('.'));
});
