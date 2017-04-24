async (ctx, next) => {
    ctx.render('index.html', {
        title: 'Welcome'
    })
}

async (ctx, next) => {
    let email = ctx.request.body.email || '';
    let password = ctx.request.body.password || '';

    if (email === 'admin' && password === '12345') {
        // 登录成功
        ctx.render('signin-ok.html', {
            title: 'Sign in ok!',
            name: 'admin'
        });
    } else {
        // 登陆失败
        ctx.render('signin-failed.html', {
            title: 'Sign In failed'
        })
    }
}