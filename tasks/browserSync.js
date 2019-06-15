// packages
const browsersync = require('browser-sync').create();

// BrowserSync
const init = done => {
  browsersync.init({
    server: false
  });
  done();
};

// BrowserSync Reload
const reload = done => {
  browsersync.reload();
  done();
};

// exports
module.exports = {
  init: init,
  reload: reload
};
