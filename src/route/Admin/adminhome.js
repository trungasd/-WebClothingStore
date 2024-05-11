const express = require('express');
const router = express.Router();

const AdminhomeController = require('../../app/controllers/AreaAdmin/AdminhomeController');

router.get('/', AdminhomeController.index);

module.exports = router;
