var db = require('../config.js');
var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var User = require('./user.js')

var goalSchema = mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId, ref: User},
  email: String,
  goals: [{ 
    content: String,
    startDate: Date,
    endDate: Date,
    freq: String,
<<<<<<< HEAD
    why: [String],
    payCount: Number
=======
    motivation: Number,
    why: [String]
>>>>>>> [done] motivate others page
  }]
});

var Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
