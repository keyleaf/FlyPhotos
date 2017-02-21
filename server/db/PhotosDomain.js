'use strict';
let mongoose = require('./mongooseDomain').mongoose;
let Schema = mongoose.Schema;

let PhotosSchema = new Schema({
  comment:{type:Schema.Types.ObjectId, ref:'Comment'},
  photoUrl : {type:String},
  title : {type:String},
});

let Photos = mongoose.model('Photos', PhotosSchema, 'Photos');

exports.PhotosDomain = {

};
