const express = require('express');
const router = express.Router();

const HeaderController = require('../app/controllers/HeaderController');

router.get('/', HeaderController.index);

module.exports = router;
