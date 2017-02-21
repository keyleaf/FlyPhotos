'use strict';

var router = require('koa-router')();

router.post('/getPhotos', function *() {
  this.body = [];
});

module.exports = router;
