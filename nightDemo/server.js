// require('check-versions')();
const Koa = require('koa');
const KoaStatic = require('koa-static');

const app = new Koa();
// const path = __dirname.substring(0, __dirname.length - 6);
const path = __dirname;
console.log('---------------------' + path);
// app.use(KoaStatic(path + '/dist'));
module.exports = app.listen('8088', function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('listening at http://localhost:8088');
})