const Voter = require('../models/voterModel');
const Election = require('../models/electionModel');
// const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const { pusher } = require('../utils/pusher');

//Create election
exports.createVoter = catchAsync(async (req, res, next) => {
  try {
    if (!req.body.user) req.body.user = req.user.id;
    const voter = await Voter.create(req.body);
    if (voter) {
      const elections = await Election.find({}).populate('candidates');
      pusher.trigger('my-channel', 'my-event', {
        message: elections,
      });
    }

    res.status(200).json({
      status: 'success',
      // data: voter,
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      // data: voter,
    });
  }
});

exports.getVoter = catchAsync(async (req, res, next) => {
  const voter = await Voter.findOne({
    user: req.user.id,
    election: req.params.id,
  });
  let stat;
  if (voter === null) {
    stat = false;
  } else {
    stat = true;
  }

  res.status(200).json({
    status: 'success',
    data: { stat },
  });
});
