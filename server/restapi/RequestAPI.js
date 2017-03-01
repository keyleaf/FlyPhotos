'use strict';

let router = require('koa-router')();
let captchapng = require('captchapng');

let photosDomain = require('../db/PhotosDomain').PhotosDomain;


router.get('/getPhotos', function *() {
  this.body = yield photosDomain.getAllPhotos();
});

router.get('/getCaptcha', function *() {
  let captcha = parseInt(Math.random() * 9000 + 1000);
  var p = new captchapng(80, 30, captcha); // width,height,numeric captcha
  p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha)
  p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)
  var img = p.getBase64();
  var imgbase64 = new Buffer(img, 'base64');
  this.set('Content-Type', 'image/png');
  this.body = {src: imgbase64, captcha: captcha};
});

module.exports = router;
