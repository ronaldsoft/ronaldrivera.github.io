'use strict';
   
/** Values **/
var gulp = require('gulp');  
var gutil = require('gulp-util');  
var ftp = require('vinyl-ftp');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var importer = require('node-sass-globbing');

/** Directories **/
var targetCss = 'css/',
    targetSass = 'sass/',
    targetJs = 'js/';

/** Sass config **/
var sass_config = {
 importer: importer,
 includePaths: [
   'node_modules/compass-mixins/lib/',
   'node_modules/breakpoint-sass/stylesheets/',
   'node_modules/susy/sass/'
 ]
};

/**
 * Browser Sync task.
 * Start proxy and run browser sync
 * change proxy for you local server
 */
gulp.task('browser-sync', function() {
  browserSync.init({
    files: [
      '**/*.php'
    ],
    injectChanges: true,
    proxy: "localhost/Cv-Ronald/"
  });
});

/**
 * Sass task.
 * Minify css all.styles.min.css
 */
gulp.task('sass', function () {
  gulp.src(targetSass + '**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass(sass_config).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 version']
    }))
    .pipe(minifyCSS({
      keepBreaks: false
    }))    
    .pipe(rename({
      suffix: '.min'
    }))    
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(targetCss));
});

/**
 *Watch Sass task.
 * Reload browser and minify when one file scss is chaged 
 */
gulp.task('watch-sass', function() {
  gulp.watch(targetSass + '**/*.scss', ['sass']).on('change', browserSync.reload);
});


/**
 * Minifyjs task.
 * Minify js ljtool2 
 */
gulp.task('minify-js', function() {
  gulp.src(targetJs + 'store.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(targetJs))
    .pipe(notify('Js, Prefixed and Minified'))
    .pipe(sourcemaps.write('.'));
});

/**
 *Watch js task.
 * Reload browser and minify when one file js is chaged 
 */
gulp.task('watch-js', function() {
  gulp.watch(targetJs + '**/*.js', ['minify-js']).on('change', browserSync.reload);
});

//Run all task
gulp.task('codes', ['watch-sass', 'watch-js']);
gulp.task('default', ['browser-sync', 'codes']);