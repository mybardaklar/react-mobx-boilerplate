const express      = require('express');
const next         = require('next');
const path         = require('path');
const url          = require('url');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');
const cors         = require('cors');
const mongoose     = require('mongoose');

const dev          = process.env.NODE_ENV !== 'production';
const server       = express();
const app          = next({ dev });
const handle       = app.getRequestHandler();

app
  .prepare()
  .then(() => {

    // api route files
    const indexRouter  = require('./server/routes/index');
    const usersRouter  = require('./server/routes/users');

    // database connection
    mongoose.connect(
      'mongodb+srv://rinXer7:640509-040147manGanas@fullstack-deneme-obnlb.mongodb.net/test?retryWrites=true&w=majority',
      {useNewUrlParser: true, useCreateIndex: true}
    )
      .then(() => {
        console.log('We\'re connected to database! :)');
      })
      .catch(err => {
        console.log('Unable to connect with the database', err);
      });
    
    // api routes
    server.use('/api', indexRouter);
    server.use('/api/users', usersRouter);

    // custom routes
    server.get('/user/:username', (req, res) => {
      const mergedQuery = Object.assign({}, req.query, req.params);
      return app.render(req, res, '/user', mergedQuery);
    });

    server.get('*', (req, res) => {
      const parsedUrl = url.parse(req.url, true);
      const { pathname } = parsedUrl;

      if (pathname === '/service-worker.js') {
        const filePath = join(__dirname, '.next', pathname);
        app.serveStatic(req, res, filePath);
      } else {
        handle(req, res, parsedUrl);
      }
    });

    server.use(cors());
    server.use(logger('dev'));
    server.use(express.json());
    server.use(express.urlencoded({ extended: false }));
    server.use(cookieParser());

    const port = process.env.PORT || 3000;

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on port ${port}...`);
    });

  });

//module.exports = server;
