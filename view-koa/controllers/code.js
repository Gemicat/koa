const exec = require('child_process').execSync;
const RL = require('readline');

const getCode = async (shell) => {
    let data = '';
    return exec(shell, function(err, stdout, stderr) {
        if (err) {
            console.log(err + '!!!!!!!!!');
        } else {
            console.log(stderr);
            data = JSON.stringify(stdout);
        }
    });
}

module.exports = {
    'GET /code': async (ctx, next) => {
        let shell = ctx.query.code || 'ls -l';
        console.log(shell);
        let data = await getCode(shell);
        ctx.render('code.html', {
            code: data,
            value: shell
        });
    }
}