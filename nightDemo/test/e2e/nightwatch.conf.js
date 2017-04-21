require('babel-register');

module.exports = {
    // 测试母包文件夹
    src_folders: ['test/e2e/specs'],
    // 测试报告
    output_folder: 'test/e2e/reports',
    custom_assertions_path: ['test/e2e/custom-assertions'],

    selenium: {
        start_process: true,
        server_path: 'node_modules/selenium-server/lib/runner/selenium-server-standalone-3.3.1.jar',
        host: '127.0.0.1',
        port: 4444,
        cli_args: {
            'webdriver.chrome.driver': require('chromedriver').path
        }
    },

    test_settings: {
        default: {
            selenium_port: 4444,
            selenium_host: 'localhost',
            silent: true,
            globals: {
                devServerURL: 'http://localhost:8088/index.html'
            }
        },

        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        }
    }
}