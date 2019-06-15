// packages
const del = require('del');
const paths = require('./paths');

// Clean
const cleanDist = () => {
  return del([paths.build]);
};

// Clean SVG icons
const cleanIcons = () => {
  return del([paths.clean.svg]);
};

// Clean images
const cleanImg = () => {
  return del([paths.clean.img]);
};

// Clean fonts
const cleanFont = () => {
  return del([paths.clean.font]);
};

// exports
module.exports = {
  dist: cleanDist,
  icons: cleanIcons,
  img: cleanImg,
  font: cleanFont
};
