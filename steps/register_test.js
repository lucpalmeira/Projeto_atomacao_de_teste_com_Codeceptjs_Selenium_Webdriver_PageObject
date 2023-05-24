var faker = require("faker");
const { I, home_page, new_user_signup_page, enter_account_information_page } =
  inject();

Feature("Register");

Scenario("Creating new registration", () => {
  var Password = faker.internet.password();
  var FirstName = faker.name.firstName();
  var LastName = faker.name.lastName();
  var State = faker.address.state();
  var City = faker.address.city();
  var ZipCode = faker.address.zipCode();
  var PhoneNumber = faker.phone.phoneNumber();
  var Email = faker.internet.email();

  I.amOnPage("/");

  home_page.accessregister();

  new_user_signup_page.proceedToRegistration(FirstName, Email);

  enter_account_information_page.creatingRecord(
    Password,
    FirstName,
    LastName,
    State,
    City,
    ZipCode,
    PhoneNumber
  );

  enter_account_information_page.createAccount();
});
