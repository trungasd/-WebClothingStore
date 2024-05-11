const mongoose = require('mongoose');
const { types } = require('sass');
const slug = require ('mongoose-slug-updater')
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Order = new Schema({
    nameUser: { type: String, required: true },
    idUser: String,
    products: Array,
    total: Number,
    createdOrder: { type: Date, default: Date.now },
    quantity: Number,
    phoneUser: String,
    emailUser: String,
});

module.exports = mongoose.model('Orders', Order);
