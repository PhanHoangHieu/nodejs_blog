"use strict";

var newsRouter = require('./news');

var siteRouter = require('./site');

function route(app) {
  // call routes của news
  app.use('/news', newsRouter);
  app.use('/', siteRouter);
}

module.exports = route;