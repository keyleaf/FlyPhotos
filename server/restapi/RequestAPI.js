'use strict';

let router = require('koa-router')();
let photosDomain = require('../db/PhotosDomain').PhotosDomain;


router.get('/getPhotos', function *() {
  this.body = yield photosDomain.getAllPhotos();
});

module.exports = router;
