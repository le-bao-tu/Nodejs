const newsRouter = require('./news');
const sitesRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');

function router(app) {
    
    app.use('/', sitesRouter);
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);
}

module.exports = router;
