const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const path = require('path');
const fs = require('fs');
const flatten = require('gulp-flatten');

//use this gulp task to conver our scss to css

//specify source and destination dir
const sourceDir = './assets/scss';
const destinationDir = path.resolve('./assets/css')

function buildStyles() {
  // Get a list of all the scss files in the src directory
  const sassFiles = fs.readdirSync(sourceDir).filter(file => path.extname(file) === '.scss');

  // Create an array of Gulp tasks for each scss file
  const tasks = sassFiles.map(file => {
    return src(path.join(sourceDir, file))
      .pipe(sass())
      .pipe(flatten())
      .pipe(dest(destinationDir, { ext: '.css' })); // Specify the file extension
  });

  return Promise.all(tasks);
}


function watchTask(){
    watch((sourceDir, '**/*.scss'), buildStyles)
}

exports.default = series(buildStyles, watchTask);

//when we run gulp in terminal it converts our scss files into css