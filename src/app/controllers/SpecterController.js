class SpecterController {

    // [GET] /
    index(req, res) {
        // res.render('specter');
        res.json({
            name: 'specter'
        });
    }


}

module.exports = new SpecterController();