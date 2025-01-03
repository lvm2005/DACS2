const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  about: {
    type: String,
  },
  profilePic: {
    type: String,
    required: true,
  },
  subscribers: {
    type: Number,
    default: 0,
  },
  subscriptions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }],
  playlists: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'playlist'
  }]
}, { timestamps: true });
module.exports = mongoose.model('user', userSchema);