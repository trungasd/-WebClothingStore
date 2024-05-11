const express = require('express');
const router = express.Router();

const AdminuserController = require('../../../app/controllers/AreaAdmin/Users/AdminuserController');

router.get('/:id/edit', AdminuserController.edit);
router.put('/:id', AdminuserController.update);
router.delete('/:id', AdminuserController.delete);
router.get('/create', AdminuserController.create);
router.post('/store', AdminuserController.store);
router.get('/', AdminuserController.index);

module.exports = router;
