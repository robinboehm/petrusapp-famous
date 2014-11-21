var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');

gulp.task('sass', function () {
  gulp.src('./css/scss/*.scss')
    .pipe(sass({ errLogToConsole: true }))
    .pipe(gulp.dest('./css'));
});

// Basic usage
gulp.task('scripts', function() {
  // Single entry point to browserify
  gulp.src('bower_components/src/js/app.js')
    .pipe(browserify({
      insertGlobals : true
    }))
    .pipe(gulp.dest('./build/js'))
});

gulp.task('default', ['sass'], function () {
  gulp.watch(['./css/scss/*.scss'], ['sass']);
});
