// Login Page (login-sf.page)
import Page from './page';
import HomeSfPage from './home-sf.page';

class LoginSfPage extends Page {
  // Login + Password + Url
  login = 'xxx';
  password = 'xxx';
  url = 'https://test.salesforce.com/';

  get usernameInput() {return $('#username');}
  get passwordInput() {return $('#password');}
  get submitBtn() {return $('#Login');}

  open() {
    super.open(this.url);
    return this;
  }

  inputLogin() {
    this.usernameInput.setValue(this.login);
  }

  inputPassword() {
    this.passwordInput.setValue(this.password);
  }

  clickSubmitBtn() {
    this.submitBtn.click();
    browser.pause(Page.WAITING_SMALL);
    return HomeSfPage;
  }

  performLogin() {
    this.open();
    this.inputLogin();
    this.inputPassword();
    this.clickSubmitBtn();
  }
}

export default new LoginSfPage();
