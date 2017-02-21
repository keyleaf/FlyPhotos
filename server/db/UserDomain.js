'use strict';
let mongoose = require('./mongooseDomain').mongoose;
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  account : {type:String},
  password : {type:String},
  petName:{type:String}
});

let User = mongoose.model('User', UserSchema, 'User');

exports.UserDomain = {

};
