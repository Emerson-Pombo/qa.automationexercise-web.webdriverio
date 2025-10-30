class AccountPage {
  get accountCreatedTitle() {
    return $('//b[text()="Account Created!"]');
  }
  get continueBtn() {
    return $('a[data-qa="continue-button"]');
  }
}

export default new AccountPage();
