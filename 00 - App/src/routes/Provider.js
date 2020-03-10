  
const express = require('express');
const router = express.Router();
const controller = require('../app/controllers/provider/ProviderController');

router.post('/create', controller.create);
router.get('/', controller.listAll);

module.exports = router