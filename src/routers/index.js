const newsRouter = require('./news');
const sitesRouter = require('./site');

function router(app) {
    
        app.use('/news',newsRouter)
        app.use('/',sitesRouter)
}

module.exports = router;