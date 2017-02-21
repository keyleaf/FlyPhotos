'use strict';
let mongoose = require('./mongooseDomain').mongoose;
let Schema = mongoose.Schema;

let CommentSchema = new Schema({
  user:{type:Schema.Types.ObjectId, ref:'User'},
  title:{type:String},
  content:{type:String}
});

let Comment = mongoose.model('Comment', CommentSchema, 'Comment');

exports.CommentDomain = {

};
