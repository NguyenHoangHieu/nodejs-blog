const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');

const route = require('./routes/index');

const app = express();
const port = 3000;

//use static file
app.use(express.static(path.join(__dirname, 'public')));
//ex: http://localhost:3000/img/a.jpg

//loger
app.use(morgan('combined'))
// app.use(morgan('dev', 'tiny'))

//teamplate
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


// app.get('/', (req, res) => {
//     res.render('home');
// });

// app.get('/news', (req, res) => {
//     res.render('news');
// });

// app.get('/contact', (req, res) => {
//     res.render('contact');
// });

// Routes config
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})