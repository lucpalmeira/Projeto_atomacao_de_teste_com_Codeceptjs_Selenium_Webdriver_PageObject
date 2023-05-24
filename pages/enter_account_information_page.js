const { I } = inject();

module.exports = {
  fileds: {
    password: "#password",
    day: "#days",
    month: "#months",
    year: "#years",
    firstname: "#first_name",
    lastname: "#last_name",
    country: "#country",
    state: "#state",
    city: "#city",
    zipcode: "#zipcode",
    celphone: "#mobile_number",
  },

  button: {
    id: "#id_gender1",
    clickcreateaccount:
      "#form > div > div > div > div.login-form > form > button",
  },

  creatingRecord(
    Password,
    FirstName,
    LastName,
    State,
    City,
    ZipCode,
    PhoneNumber
  ) {
    I.click(this.button.id);
    I.fillField(this.fileds.password, Password);
    I.selectOption(this.fileds.day, "23");
    I.selectOption(this.fileds.month, "December");
    I.selectOption(this.fileds.year, "1985");
    I.fillField(this.fileds.firstname, FirstName);
    I.fillField(this.fileds.lastname, LastName);
    I.selectOption(this.fileds.country, "United States");
    I.fillField(this.fileds.state, State);
    I.fillField(this.fileds.city, City);
    I.fillField(this.fileds.zipcode, ZipCode);
    I.fillField(this.fileds.celphone, PhoneNumber);
  },
  createAccount() {
    I.click(this.button.clickcreateaccount);
  },
};
