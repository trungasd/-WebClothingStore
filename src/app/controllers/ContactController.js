const mongoose = require('mongoose');
const { mutipleMongooseToOpject } = require('../../util/mongoose');

class ContactController {
    // [GET] /cart
    async index(req, res, next) {
        res.render('contact');
    }
}

module.exports = new ContactController();
