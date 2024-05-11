const mongoose = require('mongoose');
const { mutipleMongooseToOpject } = require('../../util/mongoose');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Handlebars = require('handlebars');

class HeaderController {
   //[GET] /header
   async index(req, res, next) {
    try {
        // Kiểm tra xem người dùng đã đăng nhập chưa bằng cách kiểm tra token trong cookie
        const user = res.locals.user;
        if (user) {
            // Nếu tìm thấy người dùng, render header với thông tin người dùng
            return res.render('partials/header', { user });
        }
        // Nếu không có token hoặc không tìm thấy người dùng, render header mặc định
        return res.render('partials/header', { user: null });
    } catch (err) {
        // Xử lý lỗi nếu có
        return res.status(500).json(err);
    }
}

}

module.exports = new HeaderController();