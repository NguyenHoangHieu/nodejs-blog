const newsRouter = require("./news");
const contactRouter = require("./contact");
const specterRouter = require("./specter");

function route(app) {

    app.get('/', (req, res) => {
        res.render('home');
    });

    app.use('/news', newsRouter);

    app.use('/specter', specterRouter);

    // app.get('/news', (req, res) => {
    //     res.render('news');
    // });

    // app.get('/contact', (req, res) => {
    //     res.render('contact');
    // });
    app.use('/contact', contactRouter);

}

module.exports = route;