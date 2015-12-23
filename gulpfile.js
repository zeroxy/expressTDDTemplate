var gulp = require('gulp');
var mocha = require('gulp-mocha');
var lint = require('gulp-jshint');
var env = require('gulp-env');

gulp.task('check', function(){
  return gulp.src('routes/*.js')
  .pipe(lint())
  .pipe(lint.reporter('default'));
});

gulp.task('test', function(){
  env({
    vars:{
      PORT: 3001
    }
  });
  return gulp.src(['test/**/*.js'])
  .pipe(mocha({ reporter: 'spec' }));
});

gulp.task('default',['check','test']);