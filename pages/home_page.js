const { I } = inject();

module.exports = {
  button: {
    clickSignupLogin:
      "#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a",
  },

  accessregister() {
    I.click(this.button.clickSignupLogin);
  },
};
