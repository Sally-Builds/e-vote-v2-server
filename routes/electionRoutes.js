const express = require('express');
const electionController = require('../controller/electionController');
// const authController = require('../controller/authController');

const router = express.Router();

// router.use(authController.protect)

// router.use(authController.restrictTo('admin'))

router
  .route('/')
  .post(electionController.createElection)
  .get(electionController.getAllElections);

router
  .route('/:id')
  .get(electionController.getElection)
  .patch(electionController.updateElection);

module.exports = router;
