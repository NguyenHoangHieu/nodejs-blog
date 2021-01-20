const newsRouter = require("./news");
const contactRouter = require("./contact");

function route(app) {

    app.get('/', (req, res) => {
        res.render('home');
    });

    app.use('/news', newsRouter);

    // app.get('/news', (req, res) => {
    //     res.render('news');
    // });

    // app.get('/contact', (req, res) => {
    //     res.render('contact');
    // });
    app.use('/contact', contactRouter);

}

module.exports = route;