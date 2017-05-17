// @ts-check
const http = require('http');
const Koa = require('koa');
const co = require('co');
const nunjucksViews = require('koa-nunjucks-promise');
const router = require('koa-router');
const server = require('koa-static');
const mount = require('koa-mount');
const socket = require('socket.io');
const exec = require('child_process').exec;
const app = new Koa();
const route = new router();

app.use(co.wrap(function * (ctx, next) {
  try {
    yield next();
  } catch(err) {
    ctx.body = {message: err.message};
    ctx.status = err.status || 500;
  }
}));

// 使用模板
app.use(nunjucksViews(`${__dirname}/views`, {
  ext: 'html', // 渲染文件后缀
  noCache: true, // 开发环境下不设置缓存
  watch: true, // 开发环境监测模板开发
  filters: {
    json: function(str) {
      return JSON.stringify(str, null, 2)
    }
  },
  globals: { // 设置对于nunjucks的全局变量
  }
}));

// 将 public 挂在到 /static 目录下
app.use(mount('/public', server(`${__dirname}/static`)));

route.get('/', co.wrap(function* (ctx) {
  yield ctx.render('index', {title: 'Nunjucks', content: 'Feifeiyu yeah!'})
}));

app.use(route.routes()).use(route.allowedMethods());

// 使用 socket.io
const httpServer = http.createServer(app.callback());
const io = socket(httpServer);

// 临时储存当前连接用户
let socketUser;

io.on('connection', function (socket) {
  
  socketUser = socket;

  socket.on('ferret', function (msg) {
    let child = exec('node ./start.js');
    socketUser.emit("pmsg", '连接成功');

    child.stdout.on('data', function(data) {
        socketUser.emit("pmsg", data);
    });
    child.stderr.on('data', function(data) {
        console.log('stdout: ' + data);
    });
    child.on('close', function(code) {
        socketUser.emit("pmsg1", '测试结束');
        console.log('pmsg测试结束');
    });
  });
});

httpServer.listen(3000, () => console.log('port 3000!'));
module.exports = app;