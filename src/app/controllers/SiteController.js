const mongoose = require('mongoose');
const Products = require('../models/Products');
const New = require('../models/New');
const Cart = require('../models/Cart');
const { mutipleMongooseToOpject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    async index(req, res, next) {
        try {
            const productsPromise = Products.find({});
            const newPromise = New.find({});

            // Đợi cho cả hai promise hoàn thành sử dụng Promise.all
            const [products, newItems] = await Promise.all([
                productsPromise,
                newPromise,
            ]);

            // Giới hạn số lượng dữ liệu mới
            const limitedData = newItems.slice(0, 3);

            res.render('home', {
                Products: mutipleMongooseToOpject(products),
                New: mutipleMongooseToOpject(limitedData),
            });
        } catch (error) {
            next(error);
        }
    }

    async logout(req, res, next) {
        try {
            // Xóa cookie chứa accessToken
            res.clearCookie('accessToken');
            // Chuyển hướng người dùng về trang chủ hoặc bất kỳ trang nào bạn muốn
            res.redirect('/');
        } catch (err) {
            // Xử lý lỗi nếu có
            return res.status(500).json(err);
        }
    }

    async addTocart(req, res, next) {
        const fromdata = req.body;
        const cart = new Cart(fromdata);
        cart.save()
            .then(() => res.redirect('back'))
            .catch(next);
    }
    
}

module.exports = new SiteController();
