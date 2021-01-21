const express = require('express');
const router = express.Router();

const specterController = require('../app/controllers/SpecterController');

router.use('/', specterController.index);

module.exports = router;