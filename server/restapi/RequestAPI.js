'use strict';

var router = require('koa-router')();

router.get('/getPhotos', function *() {
  this.body = this.request.body;
});

module.exports = router;
