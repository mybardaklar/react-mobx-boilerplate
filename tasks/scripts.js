// gulp
const gulp       = require('gulp');

// packages
const eslint     = require('gulp-eslint');
const sourcemaps = require('gulp-sourcemaps');
const babel      = require('gulp-babel');
const concat     = require('gulp-concat');
const uglify     = require('gulp-uglify');
const paths      = require('./paths');

// Lint scripts
const scriptsLint = () => {
  return gulp
    .src([
      paths.src.js,
      './gulpfile.js'
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
};

// Build scripts
const scriptsBuild = () => {
  return gulp
    .src(paths.src.js)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('main.bundle.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dest.js));
};

// exports
module.exports = {
  lint: scriptsLint,
  build: scriptsBuild
};
