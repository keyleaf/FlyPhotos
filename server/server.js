'use static';

var app = require('koa')();
var serve = require('koa-static');
var router = require('koa-router')();
var bodyParser = require('koa-body-parser');

var requestAPI = require("./restapi/RequestAPI");

var env = require('./env');

// 将request中的数据放在this.request.body中
app.use(bodyParser());
// 引用所有静态文件
app.use(serve(__dirname + '/../dist'));
app.use(serve(__dirname + '/../upload'));

// 引用所有请求
app.use(requestAPI.routes());

app.use(router.allowedMethods());



// 设置端口
app.listen(env.PORT);
console.log('http://localhost:' + env.PORT+'/');
