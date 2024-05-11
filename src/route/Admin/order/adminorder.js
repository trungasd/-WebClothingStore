const express = require('express');
const router = express.Router();

const AdminorderController = require('../../../app/controllers/AreaAdmin/Oders/AdminorderController');

router.get('/:id/edit', AdminorderController.edit);
router.put('/:id', AdminorderController.update);
router.delete('/:id', AdminorderController.delete);
router.get('/', AdminorderController.index);

module.exports = router;
