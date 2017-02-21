'use strict';

var router = require('koa-router')();

router.get('/getPhotos', function *() {
  this.body = [1,2,3,4,5,6,7];
});

module.exports = router;
