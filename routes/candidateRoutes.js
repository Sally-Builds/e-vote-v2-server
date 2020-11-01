const express = require('express');
const candidateController = require('../controller/candidateController');
// const authController = require('../controller/authController');

const router = express.Router();

// router.use(authController.protect)

// router.use(authController.restrictTo('admin'))

router
  .route('/')
  .post(candidateController.createCandidate)
  .get(candidateController.getAllCandidates);

router
  .route('/:id')
  .get(candidateController.getCandidate)
  .patch(candidateController.updateCandidate)
  .delete(candidateController.deleteCandidate);

module.exports = router;
