const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: [true, 'Candidate must have a name'],
    },
    value: {
      type: String,
      // required: [true, 'candidate value must be Included'],
      // unique: true,
    },
    photo: {
      type: String,
      default: 'default.jpg',
    },
    agenda: String,
    votes: {
      type: Number,
      default: 0,
    },
    election: {
      type: mongoose.Schema.ObjectId,
      ref: 'Election',
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
candidateSchema.pre('save', function (next) {
  this.value = this.id;
  next();
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;
