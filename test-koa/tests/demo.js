module.exports = {
  // 'Find the answer.': function (client) {
    // 定义 Bing 页面中的节点.
    // const searchInput = '#sb_form_q'
    // const searchBtn = '#sb_form_go'
    // const question = 'what is microsoft'

    // // 启动浏览器并打开 bing.com.
    // client.url('http://bing.com').maximizeWindow()

    // // 确保 "body" 和输入框可以使用.
    // client.expect.element('body').to.be.present
    // client.expect.element(searchInput).to.be.visible
    // client.pause(2000)  // 稍等两秒.

    // // 输入 "what is microsoft" 然后搜索.
    // client.setValue(searchInput, question)
    // client.click(searchBtn)
    // client.pause(2000)

    // // 截一张图然后保存到 "reports/answer.png". 
    // client.expect.element('body').to.be.present
    // client.saveScreenshot('reports/answers.png')
    // client.end()

    // client.url('http://clinic2.dxy.net').maximizeWindow()
    // client.pause(30000)
    // client.end()
  // }

  // afterEach: function(browser, done) {
    // performAsync(function(err) {
      // if (err) {
      //   console.log(err);
      //   done(err);
      // }
    // });
    // console.log(done);
  // },

  'goto login': function(browser) {
    browser
      .url('http://clinic2.dxy.net').maximizeWindow()
      .waitForElementVisible('body', 1000)
      .click('a.btn-login')
      .pause(2000)
  },

  'input dxy': function(browser) {
    browser
      .waitForElementVisible('body', 1000)
      .setValue('input.J-code', 'dxy')
      .click('button.J-submit')
      .pause(2000)
  },

  'login': function(browser) {
    browser
      .waitForElementVisible('body', 1000)
      .setValue('input[name=userid]', 'shiyx@dxy.cn')
      .setValue('input[name=passwd]', 'syx752336543')
      .click('button.J-submit')
      .pause(2000)
  },

  'doctor control': function(browser) {
    browser
      .waitForElementVisible('body', 1000)
      .click('#doctor_control a')
      .waitForElementVisible('body', 1000)
      .click('a[data-type=prew]')
      .pause(2000)
      .click('a[data-type=next]')
      .pause(2000)
      .click('a[data-type=next]')
      .pause(2000)
      .click('.J-calender-today')
      .pause(2000)
  },

  'nurse control': function(browser) {
    browser
      .waitForElementVisible('body', 1000)
      .click('#nurse_control a')
      .pause(2000)
      .end();
  }
}