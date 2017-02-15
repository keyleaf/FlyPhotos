var router = require('koa-router')();

router.post('/', function *() {
  this.body = 'Hello World'
});

module.exports = router;
