var express = require('express');
var route = express.Router();

const productController = require('../app/controllers/ProductController');

route.get('/:slug', productController.show);
route.get('/', productController.index);

module.exports = route;
