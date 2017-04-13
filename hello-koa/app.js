const Koa = require('koa'); // 引入 koa
const bodyParser = require('koa-bodyparser'); // 引入 解析 post 请求数据的模块
const router = require('koa-router')(); // 引入 router
// 导入controller middleware:
const controller = require('./controller');


// 创建 Koa 实例
const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`); // 打印URL
    await next(); // 调用下一个middleware
});

// 使用middleware:
app.use(controller());

// bodyParser 必须在 router 之前注册
app.use(bodyParser());
app.use(router.routes());

app.listen(3000);
console.log('run koa ing~');