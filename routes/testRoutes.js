const express = require('express');
const testController = require('../controller/testController');

const router = express.Router();

router.route('/').get(testController.test).post(testController.vote);

module.exports = router;
