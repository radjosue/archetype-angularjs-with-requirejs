/*
* Dependencias
*/
var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    clean   = require('gulp-clean'),
    runSeq  = require('run-sequence'),
    yargs   = require('yargs').argv,
    serve   = require('gulp-serve');

/*
* Build Path
*/
var buildPath = 'build/';

/*
* Configuración de la tarea 'install'
*/
gulp.task('install', ['clean'], function() {
	if (yargs.production) {
		buildPath += 'production';
  } else {
    buildPath += 'debbug';
  }
	runSeq('build');
});

/*
* Configuración de la tarea 'build'
*/
gulp.task('build', ['vendors', 'app', 'views', 'css', 'img']);

/*
* Configuración de la tarea clean
*/
gulp.task('clean', function(){
	gulp.src('build/', { read: false }).pipe(clean());
});

/*
* Configuración de la tarea 'app'
*/
gulp.task('app', function () {
  var tmpGulp = gulp.src('app/**/**/*.js');
  if (yargs.production) {
	tmpGulp.pipe(uglify());
  }
  tmpGulp.pipe(gulp.dest(buildPath + '/app'));
});

/*
* Configuración de la tarea 'css'
*/
gulp.task('css', function () {
  gulp.src('assets/css/**/**/*.css')
  .pipe(gulp.dest(buildPath + '/assets/css'));
});

/*
* Configuración de la tarea 'img'
*/
gulp.task('img', function () {
  gulp.src('assets/img/**/**/*.jpg')
  .pipe(gulp.dest(buildPath + '/assets/img'));
});

/*
* Configuración de la tarea 'views'
*/
gulp.task('views', function () {
  var tmpGulp = gulp.src('views/**/**/*.html');
  if (yargs.production) {
	tmpGulp.pipe(htmlmin({collapseWhitespace: true}));
  }
  tmpGulp.pipe(gulp.dest(buildPath + '/views'));
  tmpGulp = gulp.src('index.html');
  if (yargs.production) {
	tmpGulp.pipe(htmlmin({collapseWhitespace: true}));
  }
  tmpGulp.pipe(gulp.dest(buildPath + '/'));
});

/*
* Configuración de la tarea 'vendors'
*/
gulp.task('vendors', function () {
  gulp.src('vendors/**/**/*.*')
  .pipe(gulp.dest(buildPath + '/vendors'));
});

/*
* Configuración de la tarea 'serve-debbug'
*/
gulp.task('serve-debbug', serve({
  root: ['build/debbug'],
  port: 9888,
}));

/*
* Configuración de la tarea 'serve-prod'
*/
gulp.task('serve-prod', serve({
  root: ['build/production'],
  port: 9889,
}));