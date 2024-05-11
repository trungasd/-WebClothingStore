const mongoose = require('mongoose');
const { types } = require('sass');
const slug = require ('mongoose-slug-updater')
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String, required: true },
    detail: String,
    category: String,
    idProduct: String,
    imageURL: { type:String, require: true},
    createdProduct: { type: Date, default: Date.now },
    updatedProduct: { type: Date, default: Date.now },
    price: Number,
    quantity: Number,
    salePrice: Number,
    slug: { type: String , slug: 'name', unique : 'true' },
    imageURL2: String,
    imageURL3: String,
});

module.exports = mongoose.model('Products', Product);
