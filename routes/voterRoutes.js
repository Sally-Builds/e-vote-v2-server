const express = require('express');
const voterController = require('../controller/voterController');
const authController = require('../controller/authController');

const router = express.Router();

router.use(authController.protect);

// router.use(authController.restrictTo('admin'))

router.route('/').post(voterController.createVoter);

router.route('/:id').get(voterController.getVoter);

module.exports = router;
