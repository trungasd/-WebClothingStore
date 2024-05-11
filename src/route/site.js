const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/logout', siteController.logout)
router.post('/addTocart', siteController.addTocart)
router.get('/', siteController.index);

module.exports = router;
