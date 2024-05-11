const mongoose = require('mongoose');
const {
    mutipleMongooseToOpject,
    mongooseToOpject,
} = require('../../../../util/mongoose');
const Products = require('../../../models/Products');
const Handlebars = require('handlebars');
const HandlebarsMoment = require('handlebars.moment');
const moment = require('moment');

HandlebarsMoment.registerHelpers(Handlebars);

class AdminproductController {
    //[GET] /admin/products
    async index(req, res, next) {
        Products.find({})
            .then((Products) => {
                res.render('Admin/products/products', {
                    Products: mutipleMongooseToOpject(Products),
                });
            })
            .catch(next);
    }

    //[GET] /admin/products/create
    create(req, res, next) {
        res.render('Admin/products/add');
    }
    //[GET] /admin/products/:id/edit
    edit(req, res, next) {
        Products.findById(req.params.id)
            .then((Product) =>
                res.render('Admin/products/edit', {
                    Product: mongooseToOpject(Product),
                }),
            )
            .catch(next);
    }

    //[PUT] /admin/products/:id
    update(req, res, next) {
        //res.json(req.body)
        Products.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/products'))
            .catch(next);
    }

    //[DELETE] /admin/products/:id
    delete(req, res, next) {
        Products.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[POST] /admin/products/store
    store(req, res, next) {
        //res.json(req.body);
        const fromdata = req.body;
        fromdata.imageURL = `/img/product/${req.body.imageUrl1}`;
        fromdata.imageURL2 = `/img/product/${req.body.imageUrl2}`;
        fromdata.imageURL3 = `/img/product/${req.body.imageUrl3}`;
        const product = new Products(fromdata);
        product.save()
            .then(() => res.redirect('/admin/products'))
            .catch(next);
    }
}

module.exports = new AdminproductController();
