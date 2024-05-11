const mongoose = require('mongoose');
const Products = require('../models/Products');
const {
    mutipleMongooseToOpject,
    mongooseToOpject,
} = require('../../util/mongoose');
class ProductController {
    //[GET] /products
    async index(req, res, next) {
        Products.find({})
            .then((Products) => {
                res.render('listproduct', {
                    Products: mutipleMongooseToOpject(Products),
                });
            })
            .catch(next);
    }
    //[GET]/products/:slug
    async show(req, res, next) {
        Products.findOne({ slug: req.params.slug })
            .then((Products) => {
                res.render('product', { Products: mongooseToOpject(Products) });
                // res.json({Products: mongooseToOpject(Products)});
            })
            .catch(next);
    }
}

module.exports = new ProductController();
