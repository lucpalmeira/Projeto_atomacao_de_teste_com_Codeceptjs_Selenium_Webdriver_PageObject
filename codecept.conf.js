const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: "testwebdriver1(pageobject)",
  tests: "./steps/*_test.js",
  output: "./output",
  helpers: {
    WebDriver: {
      url: "http://automationexercise.com",
      browser: "chrome",
      waitForTimeout: 5000,
      desiredCapabilities: {
        chromeOptions: {},
      },
    },
  },
  include: {
    I: "./steps_file.js",
    home_page: "./pages/home_page.js",
    new_user_signup_page: "./pages/new_user_signup_page.js",
    enter_account_information_page: "./pages/enter_account_information_page.js",
  },
  bootstrap: null,
  teardown: null,
  mocha: {},
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
    wdio: {
      enabled: true,
      services: ["selenium-standalone"],
    },
  },
};
