'use strict';
let mongoose = require('./mongooseDomain').mongoose;
let md5 = require('md5');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  account: {type: String},
  password: {type: String},
  petName: {type: String},
  email: {type: String},
  valid: {type: String}
});

let User = mongoose.model('User', UserSchema, 'User');

exports.UserDomain = {
  registerUser: user => {
    let param = new User({
      account: user.account,
      password: md5(user.password),
      petName: user.petName,
      email: user.email,
      valid: user.valid
    });
    return param.findOneAndUpdate({id: mongoose.Types.ObjectId()});
  },

  findByParam: user => {
    return User.findOne({
      account: user.account,
      password: md5(user.password)
    }).exec((err, result) => {
      if (err) {
        console.log(err);
      } else {
        return result;
      }
    });
  }
};
