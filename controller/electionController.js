const Election = require('../models/electionModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

//Create election
exports.createElection = catchAsync(async (req, res, next) => {
  const election = await Election.create(req.body);

  res.status(200).json({
    status: 'success',
    data: election,
  });
});

//get single election
exports.getElection = catchAsync(async (req, res, next) => {
  const election = await Election.findById(req.params.id).populate(
    'candidates'
  );

  if (!election)
    return next(new AppError('No election found with that id', 404));

  res.status(200).json({
    status: 'success',
    data: election,
  });
});

//get all elections
exports.getAllElections = catchAsync(async (req, res, next) => {
  const elections = await Election.find({}).populate('candidates');

  res.status(200).json({
    status: 'success',
    data: elections,
  });
});

exports.updateElection = catchAsync(async (req, res, next) => {
  let data = req.body;
  // eslint-disable-next-line prefer-destructuring
  if (req.body.data) data = req.body.data;
  const election = await Election.findByIdAndUpdate(req.params.id, data, {
    new: true,
    runValidators: true,
  });
  if (!election) {
    return next(new AppError('Product not found', 404));
  }
  await election.save();
  const updatedElection = await Election.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    data: updatedElection,
  });
});
