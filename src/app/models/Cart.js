const mongoose = require('mongoose');
const { types } = require('sass');
const Schema = mongoose.Schema;

const Cart = new Schema({
    name: { type: String, required: true },
    detail: String,
    idUser: String,
    category: String,
    imageURL: { type:String, require: true},
    price: Number,
    quantity: Number,
    salePrice: Number,
    slug: { type: String , unique : 'true' },
});

module.exports = mongoose.model('Cart', Cart);
