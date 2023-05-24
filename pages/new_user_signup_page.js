const { I } = inject();

module.exports = {
  fileds: {
    insertName:
      "#form > div > div > div:nth-child(3) > div > form > input[type=text]:nth-child(2)",

    insertEmail:
      "#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)",
  },

  button: {
    clickSignup: "#form > div > div > div:nth-child(3) > div > form > button",
  },

  proceedToRegistration(FirstName, Email) {
    I.fillField(this.fileds.insertName, FirstName);
    I.fillField(this.fileds.insertEmail, Email);
    I.click(this.button.clickSignup);
  },
};
