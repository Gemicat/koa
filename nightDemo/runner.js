const server = require('./server.js');

const spawn = require('cross-spawn');

const runner = spawn('./node_modules/.bin/nightwatch', ['--config', 'test/e2e/nightwatch.conf.js', '--env', 'chrome'], {stdio: 'inherit'});

runner.on('exit', function(code) {
    server.close();
    process.exit(code);
})

runner.on('error', function(err) {
    server.close();
    throw err;
})