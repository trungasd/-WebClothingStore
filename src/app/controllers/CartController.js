const mongoose = require('mongoose');
const Cart = require('../models/Cart');
const Order = require('../models/Order');
const { mutipleMongooseToOpject } = require('../../util/mongoose');

class CartController {
    // [GET] /cart
    async index(req, res, next) {
        await Cart.find({})
            .then((Cart) => {
                //res.json(Cart)
                 res.render('cart', {
                    Cart: mutipleMongooseToOpject(Cart),
                    cartUser: res.locals.user
                });
            })
            .catch(next);
    }

    //[DELETE] /cart/:id
    async delete(req, res, next) {
        Cart.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[POST] /cart/makeorder
    makeorder(req, res, next) {
        //res.json(req.body);
        const fromdata = req.body;
        const order = new Order(fromdata);
        order.save()
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CartController();
