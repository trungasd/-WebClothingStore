const mongoose = require('mongoose');
const { mutipleMongooseToOpject } = require('../../../util/mongoose');

class AdminhomeController {
    // [GET] /admin
    async index(req, res, next) {
        res.render('Admin/home');
    }
}

module.exports = new AdminhomeController();
