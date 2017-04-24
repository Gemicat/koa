const exec = require('child_process').execSync;

const getCode = async (shell) => {
    let data = '';
    return exec(shell, function(err, stdout, stderr) {
        if (err) {
            console.log('命令运行失败：' + err);
        } else {
            console.log(stderr);
            data = JSON.stringify(stdout);
        }
    });
}

module.exports = {
    'GET /code': async (ctx, next) => {
        let shell = (ctx.query.code || 'ls -l').trim();
        let data = '';
        try{
            data = await getCode(shell);
        } catch(e) {
            data = '无效的命令：' + shell;
        }
        ctx.render('code.html', {
            code: data,
            value: shell
        });
    }
}