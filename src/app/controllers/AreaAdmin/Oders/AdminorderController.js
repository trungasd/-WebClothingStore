const mongoose = require('mongoose');
const {
    mutipleMongooseToOpject,
    mongooseToOpject,
} = require('../../../../util/mongoose');
const Orders = require('../../../models/Order');
const Handlebars = require('handlebars');
const HandlebarsMoment = require('handlebars.moment');
const moment = require('moment');

HandlebarsMoment.registerHelpers(Handlebars);

class AdminproductController {
    //[GET] /admin/products
    async index(req, res, next) {
        Orders.find({})
            .then((Orders) => {
                res.render('Admin/orders/orders', {
                    Orders: mutipleMongooseToOpject(Orders),
                });
            })
            .catch(next);
    }


    // //[GET] /admin/products/:id/edit
    edit(req, res, next) {
        Orders.findById(req.params.id)
            .then((Order) =>
                res.render('Admin/orders/edit', {
                    Order: mongooseToOpject(Order),
                }),
            )
            .catch(next);
    }

    // //[PUT] /admin/products/:id
    update(req, res, next) {
        //res.json(req.body)
        Orders.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/orders'))
            .catch(next);
    }

    //[DELETE] /admin/products/:id
    delete(req, res, next) {
        Orders.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new AdminproductController();
