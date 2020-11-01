const mongoose = require('mongoose');
const slugify = require('slugify');
const AppError = require('../utils/appError');

const electionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Election must have a name'],
      unique: true,
    },
    startTime: Date,
    endTime: Date,
    slug: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

electionSchema.virtual('candidates', {
  ref: 'Candidate',
  foreignField: 'election',
  localField: '_id',
});

electionSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

electionSchema.pre('save', function (next) {
  if (this.startTime > this.endTime) {
    return next(
      new AppError('Start Date must be less than the ending time', 404)
    );
  }
  next();
});

const Election = mongoose.model('Election', electionSchema);

module.exports = Election;
