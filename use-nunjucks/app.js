const nunjucks = require('nunjucks');

const createEnv = (path, opts) => {
    let autoescape = opts.autoescape && true;
    let noCache = opts.noCache || false;
    let watch = opts.watch || false;
    let throwOnUndefined = opts.throwOnUndefined || false;
    let env = new nunjucks.Environment(
        new nunjucks.FileSystemLoader('views', {
            noCache: noCache,
            watch: watch
        }), {
            autoescape: autoescape,
            throwOnUndefined: throwOnUndefined
        }
    );

    if (opts.filters) {
        for (let f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }

    return env;
}

const env = createEnv('views', {
    watch: true,
    filters: {
        hex: (n) => {
            return '0x' + n.toString(16);
        }
    }
})

var s = env.render('hello.html', {name: '<script>alert("小明")</script>'});
console.log(s);