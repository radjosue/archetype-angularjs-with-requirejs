/*
* Dependencias
*/
var gulp        = require('gulp'),
    uglify      = require('gulp-uglify'),
    htmlmin     = require('gulp-htmlmin'),
    clean       = require('gulp-clean'),
    runSeq      = require('run-sequence'),
    yargs       = require('yargs').argv,
    serve       = require('gulp-serve'),
    minify      = require('gulp-minify'),
    ngAnnotate  = require('gulp-ng-annotate');

/*
* dist Path
*/
var distPath = 'dist/';

/*
* Configuración de la tarea 'install'
*/
gulp.task('install', ['clean'], function() {
	if (yargs.production) {
		distPath += 'production';
  } else {
    distPath += 'dev';
  }
	runSeq('dist');
});

/*
* Configuración de la tarea 'dist'
*/
gulp.task('dist', ['vendors', 'app', 'views', 'css', 'img']);

/*
* Configuración de la tarea clean
*/
gulp.task('clean', function(){
	gulp.src('dist/', { read: false }).pipe(clean());
});

/*
* Configuración de la tarea 'app'
*/
gulp.task('app', function () {
  var tmpGulp = gulp.src('app/**/**/*.js');
  if (yargs.production) {
	    tmpGulp.pipe(ngAnnotate())
      .pipe(minify())
      .pipe(uglify());
  }
  tmpGulp.pipe(gulp.dest(distPath + '/app'));
});

/*
* Configuración de la tarea 'css'
*/
gulp.task('css', function () {
  gulp.src('assets/css/**/**/*.css')
  .pipe(gulp.dest(distPath + '/assets/css'));
});

/*
* Configuración de la tarea 'img'
*/
gulp.task('img', function () {
  gulp.src('assets/img/**/**/*.jpg')
  .pipe(gulp.dest(distPath + '/assets/img'));
});

/*
* Configuración de la tarea 'views'
*/
gulp.task('views', function () {
  var tmpGulp = gulp.src('views/**/**/*.html');
  if (yargs.production) {
	tmpGulp.pipe(htmlmin({collapseWhitespace: true}));
  }
  tmpGulp.pipe(gulp.dest(distPath + '/views'));
  tmpGulp = gulp.src('index.html');
  if (yargs.production) {
	tmpGulp.pipe(htmlmin({collapseWhitespace: true}));
  }
  tmpGulp.pipe(gulp.dest(distPath + '/'));
});

/*
* Configuración de la tarea 'vendors'
*/
gulp.task('vendors', function () {
  gulp.src('vendors/**/**/*.*')
  .pipe(gulp.dest(distPath + '/vendors'));
});

/*
* Configuración de la tarea 'serve-debbug'
*/
gulp.task('serve-dev', serve({
  root: ['dist/dev'],
  port: 9888,
}));

/*
* Configuración de la tarea 'serve-prod'
*/
gulp.task('serve-prod', serve({
  root: ['dist/production'],
  port: 9889,
}));