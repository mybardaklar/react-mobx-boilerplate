// Files paths
module.exports = {
  build: "./src/assets_dist",
  src: {
    sass    : "./assets/sass/**/*.sass",
    js      : "./assets/js/**/*.js",
    svg     : "./assets/svg/**/*.svg",
    img     : "./assets/img/**/*",
    font    : "./assets/fonts/**/*"
  },
  dest: {
    sass    : "./src/assets_dist/css",
    js      : "./src/assets_dist/js",
    svg     : "./src/assets_dist/svg",
    img     : "./src/assets_dist/img",
    font    : "./src/assets_dist/fonts"
  },
  watch: {
    sass    : "./assets/sass/**/*.sass",
    js      : "./assets/js/**/*.js",
    svg     : "./assets/svg/**/*.svg",
    img     : "./assets/img/**/*",
    font    : "./assets/fonts/**/*"
  },
  clean: {
    svg     : "./src/assets_dist/svg/**/*",
    img     : "./src/assets_dist/img/**/*",
    font    : "./src/assets_dist/fonts/**/*"
  }
};
