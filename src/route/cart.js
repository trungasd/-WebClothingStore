const express = require('express');
const router = express.Router();
const cartController = require('../app/controllers/CartController');

router.delete('/:id', cartController.delete);
router.post('/makeorder', cartController.makeorder);
router.get('/', cartController.index);

module.exports = router;
