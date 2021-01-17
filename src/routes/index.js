const newsRouter = require('./news')
const siteRouter = require('./site')

function route(app) {
    // call routes của news
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = route;