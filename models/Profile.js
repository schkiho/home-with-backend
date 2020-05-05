const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  phone: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model('Profile', ProfileSchema);
