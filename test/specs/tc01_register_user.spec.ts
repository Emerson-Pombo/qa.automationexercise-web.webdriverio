import { expect } from '@wdio/globals';
import HomePage from '../../src/pages/home.page';
import SignupPage from '../../src/pages/signup.page';
import AccountPage from '../../src/pages/account.page';
import { generateUser } from '../../src/utils/data';

describe('TC01 - Register User', () => {
  it('should register and delete a user successfully', async () => {
    // Arrange
    const user = generateUser();

    // Act
    await HomePage.open('/');

    await SignupPage.click(SignupPage.acessSinupLogin);
    await SignupPage.type(SignupPage.inputFirstName, user.name);
    await SignupPage.type(SignupPage.inputEmail, user.email);
    await SignupPage.click(SignupPage.btnSignup);

    await SignupPage.click(SignupPage.titleMr);
    await SignupPage.type(SignupPage.password, user.password);
    await SignupPage.select(SignupPage.day, user.dob.day);
    await SignupPage.select(SignupPage.month, user.dob.month);
    await SignupPage.select(SignupPage.year, user.dob.year);

    await SignupPage.click(SignupPage.newsletter);
    await SignupPage.click(SignupPage.offers);

    await SignupPage.type(SignupPage.firstName, user.address.firstName);
    await SignupPage.type(SignupPage.lastName, user.address.lastName);
    await SignupPage.type(SignupPage.company, user.address.company);
    await SignupPage.type(SignupPage.address1, user.address.address1);
    await SignupPage.type(SignupPage.address2, user.address.address2);
    await SignupPage.select(SignupPage.country, user.address.country);
    await SignupPage.type(SignupPage.state, user.address.state);
    await SignupPage.type(SignupPage.city, user.address.city);
    await SignupPage.type(SignupPage.zipcode, user.address.zipcode);
    await SignupPage.type(SignupPage.mobile, user.address.mobile);

    await SignupPage.click(SignupPage.createAccountBtn);

    // Assert - account created
    await expect(AccountPage.accountCreatedTitle).toBeDisplayed();
    await SignupPage.click(SignupPage.btsContinueSucess);

    // Act - delete account
    await SignupPage.click(SignupPage.deleteAccountBtn);
    await expect(SignupPage.accountDeletedMsg).toBeDisplayed();
    await SignupPage.click(SignupPage.btnContinue);
  });
});
