const gulp = require('gulp');
const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const del = require('del');

const browserSync = require('browser-sync').create();

const dist = './dist';

const html = () => {
  return src('./src/index.html')
    .pipe(gulp.dest(dist))
    .pipe(browserSync.stream());
};

const jsbuild = () => {
  return src('./src/js/script.js')
    .pipe(gulp.dest(dist + '/js'))
    .pipe(browserSync.stream());
};

const sassToCSS = () => {
  return (
    src('./src/scss/style.scss')
      .pipe(sass().on('error', sass.logError))
      // .pipe(sass())
      .pipe(gulp.dest(dist + '/css'))
      .pipe(browserSync.stream())
  );
};

const copyAssets = () => {
  gulp.src('./src/img/icons/**/*.*').pipe(gulp.dest(dist + '/img/icons'));

  return gulp
    .src('./src/img/**/*.*')
    .pipe(gulp.dest(dist + '/img'))
    .pipe(browserSync.stream());
};

const clean = () => {
  return del(['./dist/']);
};

const watcher = () => {
  browserSync.init({
    server: './dist/',
    port: 4000,
    notify: true,
  });

  gulp.watch('./src/index.html', gulp.parallel('html'));
  gulp.watch('./src/img/**/*.*'), gulp.series('clean');
  gulp.watch('./src/img/icons/**/*.*', gulp.parallel('copyAssets'));
  gulp.watch('./src/img/**/*.*', gulp.parallel('copyAssets'));
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('sassToCSS'));
  gulp.watch('./src/js/**/*.js', gulp.parallel('jsbuild'));
};

// const build = gulp.parallel(html, copyAssets, sassToCSS, jsbuild);
const build = gulp.series(clean, html, copyAssets, sassToCSS, jsbuild);

exports.sassToCSS = sassToCSS;
exports.watch = watcher;
exports.html = html;
exports.jsbuild = jsbuild;
exports.copyAssets = copyAssets;
exports.build = build;
exports.clean = clean;

exports.dev = parallel(build, watcher);
