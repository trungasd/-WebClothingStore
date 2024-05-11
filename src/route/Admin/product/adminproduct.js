const express = require('express');
const router = express.Router();

const AdminproductController = require('../../../app/controllers/AreaAdmin/Products/AdminproductController');

router.get('/:id/edit', AdminproductController.edit);
router.put('/:id', AdminproductController.update);
router.delete('/:id', AdminproductController.delete);
router.get('/create', AdminproductController.create);
router.post('/store', AdminproductController.store);
router.get('/', AdminproductController.index);

module.exports = router;
