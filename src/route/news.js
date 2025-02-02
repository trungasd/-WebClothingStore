var express = require('express');
var route = express.Router();

const newsController = require('../app/controllers/NewsController');

route.get('/:slug', newsController.show);
route.get('/', newsController.index);

module.exports = route;
