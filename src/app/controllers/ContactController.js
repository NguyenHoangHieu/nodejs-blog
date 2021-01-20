class ContactController {

    // [GET] /
    index(req, res) {
        res.render('contact');
    }

}

module.exports = new ContactController;