import BasePage from './base.page';

class SignupPage extends BasePage {
    get acessSinupLogin() {
    return $('a[href="/login"]');
  }
  get inputFirstName() {
    return $('input[data-qa="signup-name"]');
  }
  get inputEmail() {
    return $('input[data-qa="signup-email"]');
  }
  get btnSignup() {
    return $('button[data-qa="signup-button"]');
  }
  get titleMr() {
    return $('#id_gender1');
  }
  get password() {
    return $('#password');
  }
  get day() {
    return $('#days');
  }
  get month() {
    return $('#months');
  }
  get year() {
    return $('#years');
  }
  get newsletter() {
    return $('#newsletter');
  }
  get offers() {
    return $('#optin');
  }
  get firstName() {
    return $('#first_name');
  }
  get lastName() {
    return $('#last_name');
  }
  get company() {
    return $('#company');
  }
  get address1() {
    return $('#address1');
  }
  get address2() {
    return $('#address2');
  }
  get country() {
    return $('#country');
  }
  get state() {
    return $('#state');
  }
  get city() {
    return $('#city');
  }
  get zipcode() {
    return $('#zipcode');
  }
  get mobile() {
    return $('#mobile_number');
  }
  get createAccountBtn() {
    return $('[data-qa="create-account"]');
  }
  get btsContinueSucess() {
    return $('[data-qa="continue-button"]');
  }
  get accountDeletedMsg() {
    return $('h2[data-qa="account-deleted"]');
  }
  get deleteAccountBtn() {
    return $('a[href="/delete_account"]');
  }
  get btnContinue() {
    return $('[data-qa="continue-button"]');
  }
}
export default new SignupPage();
