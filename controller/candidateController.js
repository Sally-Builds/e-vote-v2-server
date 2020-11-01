const Candidate = require('../models/candidateModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.createCandidate = catchAsync(async (req, res, next) => {
  const candidate = await Candidate.create(req.body);

  res.status(200).json({
    status: 'success',
    data: candidate,
  });
});

//get single election
exports.getCandidate = catchAsync(async (req, res, next) => {
  const candidate = await Candidate.findById(req.params.id);

  if (!candidate)
    return next(new AppError('No election found with that id', 404));

  res.status(200).json({
    status: 'success',
    data: candidate,
  });
});

exports.getAllCandidates = catchAsync(async (req, res, next) => {
  const candidates = await Candidate.find({});

  res.status(200).json({
    status: 'success',
    data: candidates,
  });
});

exports.updateCandidate = catchAsync(async (req, res, next) => {
  let data = req.body;
  // eslint-disable-next-line prefer-destructuring
  if (req.body.data) data = req.body.data;
  const candidate = await Candidate.findByIdAndUpdate(req.params.id, data, {
    new: true,
    runValidators: true,
  });
  if (!candidate) {
    return next(new AppError('candidate not found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: candidate,
  });
});

exports.deleteCandidate = catchAsync(async (req, res, next) => {
  const can = await Candidate.findByIdAndDelete(req.params.id);
  if (!can) {
    return next(new AppError('No blog found with that slug', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
