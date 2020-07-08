/* PAGES IMPORT */
import Page from './page';
import Objects from '../../support/utils/objects.json';


class HomePage extends Page {
  pageUrl = 'https://login.salesforce.com/';

  /* ELEMENTS */
  get usernameField() {
    return browser.$('input#username');
  }

  get passwordField() {
    return browser.$('input#password');
  }

  get logInBtn() {
    return browser.$('input#Login');
  }

  /* ACTIONS */
  get inputLogin() {
    const userName = Objects.users.systemAdmin.login;
    this.usernameField.setValue(userName);
  }

  get inputPassword() {
    const password = Objects.users.systemAdmin.password;
    this.passwordField.setValue(password);
  }

  performSysAdminLogin() {
    this.open(this.pageUrl);
    this.inputLogin;
    this.inputPassword;
    this.logInBtn.click();
    browser.pause(Page.WAITING_BIG);
    return HomePage;
  }
}

export default new HomePage();
