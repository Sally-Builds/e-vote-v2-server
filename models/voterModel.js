const mongoose = require('mongoose');
const Candidate = require('./candidateModel');

const voterSchema = new mongoose.Schema({
  election: {
    type: mongoose.Schema.ObjectId,
    ref: 'Election',
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  candidate: {
    type: mongoose.Schema.ObjectId,
    ref: 'Candidate',
  },
});

// voterSchema.index({ election: 1, user: 1 }, { unique: true });

voterSchema.statics.calculations = async function (electionId, candidateId) {
  const stats = await this.aggregate([
    {
      $match: { election: electionId, candidate: candidateId },
    },
    {
      $group: {
        _id: 'totalVotes',
        votes: { $sum: 1 },
      },
    },
  ]);
  await Candidate.findByIdAndUpdate(candidateId, {
    votes: stats[0].votes,
  });
};

voterSchema.post('save', function () {
  this.constructor.calculations(this.election, this.candidate);
});

const Voter = mongoose.model('Voter', voterSchema);

module.exports = Voter;
