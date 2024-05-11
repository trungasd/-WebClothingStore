const express = require('express');
const router = express.Router();

const AdminnewController = require('../../../app/controllers/AreaAdmin/News/AdminnewController');

router.get('/:id/edit', AdminnewController.edit);
router.put('/:id', AdminnewController.update);
router.delete('/:id', AdminnewController.delete);
router.get('/create', AdminnewController.create);
router.post('/store', AdminnewController.store);
router.get('/', AdminnewController.index);

module.exports = router;
