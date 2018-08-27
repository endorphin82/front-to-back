const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);

/**
 git status
 git add .
 git checkout -b 2.User_moodel
 git commit -m 'Creating User model'
 git pull
 git push --set-upstream origin 2.User_moodel
 * / */