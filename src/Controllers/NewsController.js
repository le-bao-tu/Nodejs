class NewsController {
    index(req, res) {
        res.render('news');
    }
    showDetail(req, res) {
        res.send('Show-detail');
    }
}

module.exports = new NewsController();
