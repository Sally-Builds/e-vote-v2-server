const catchAsync = require('../utils/catchAsync');
// const AppError = require('../utils/appError');
const { pusher } = require('../utils/pusher');

const db = [
  {
    election: 'Nacoss',
    Date: '12-13-2020',
    candidates: [
      {
        label: 'Joshua Uzoagulu',
        value: 'joshua',
        votes: 0,
      },
      {
        label: 'Clover Sochima',
        value: 'clover',
        votes: 0,
      },
      {
        label: 'Mba Ginigeme',
        value: 'mba',
        votes: 0,
      },
    ],
  },
  {
    election: 'Fossa',
    Date: '12-13-2020',
    candidates: [
      {
        label: 'Iyida Daniel',
        value: 'iyida',
        votes: 0,
      },
      {
        label: 'Desire Collins',
        value: 'desire',
        votes: 0,
      },
      {
        label: 'Walter Chidebere',
        value: 'walter',
        votes: 0,
      },
    ],
  },
];

exports.test = catchAsync(async (req, res, next) => {
  //   pusher.trigger('my-channel', 'my-event', {
  //     message: 'hello world',
  //   });
  res.status(200).json({
    status: 'success',
    data: db,
  });
});

exports.vote = catchAsync(async (req, res, next) => {
  const { candidate } = req.body;
  db.forEach((e) => {
    e.candidates.forEach((el) => {
      if (candidate === el.value) {
        el.votes += 1;
      }
    });
  });
  pusher.trigger('my-channel', 'my-event', {
    message: db,
  });
  res.status(200).json({
    status: 'success',
  });
});
