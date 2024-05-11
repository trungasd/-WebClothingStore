const mongoose = require('mongoose');
const { mutipleMongooseToOpject } = require('../../util/mongoose');

class AccountController {
    // [GET] /cart
    async index(req, res, next) {
        res.render('account');
    }
}

module.exports = new AccountController();
