const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('scss/**/*.scss')
    .pipe(sass())
    .pipe(dest('assets/css'))
}

function watchTask() {
  watch(['scss/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)

// 1. npm init -y
// 2. npm i --save-dev sass gulp gulp-sass
// 3. npm run watch:sass