/* PAGES IMPORT */
import Page from './page';

class LightningAppBuilderPage extends Page {
  constructor() {
    super();
    this.pageTitle = 'Lightning App Builder';
  }

  /* ELEMENTS */
  get newBtn() {
    return browser.$('//table/.//td[@class="pbButton"]/input[@title="New"]');
  }

  /* == CREATE 'Create a new Lightning App' == */
  // Web-Form1: 'Create a new Lightning page'
  get takeWF1Title() {
    const wf1Title = browser.$('//h2[contains(@class, "title")]');
    wf1Title.waitForDisplayed();
    return wf1Title.getText();
  }

  /* ACTIONS */
  get takeActualPageTitle() {
    const pTitle = browser.$('//span[text()="Lightning App Builder"' +
            ' and contains(@class, "breadcrumbDetail")]');
    return pTitle.getText();
  }

  // start creation New App in App Builder
  get clickNewBtn() {
    this.newBtn.click();
    browser.pause(Page.WAITING_SMALL);
    browser.refresh();
    return LightningAppBuilderPage;
  }

  // click on 'App Page' item
  get clickAppPage() {
    const appP = browser.$('//span[text()="App Page"]');
    appP.click();
    return LightningAppBuilderPage;
  }

  // click on 'Next' or 'Finish' button
  clickNextBtnWf1(typeBtn) {
    let tp;
    if (typeBtn === 'F') {
      tp = 'Finish';
    } else if (typeBtn === 'N') {
      tp = 'Next';
    } else {
      console.log('Unknown type of the button. Should be "Next" or "Finish"');
    }
    const nBtn = browser.$('//a[text()="' + tp + '" and contains(@class, "primary")]');
    nBtn.click();
    browser.pause(Page.WAITING_SMALL);
    return LightningAppBuilderPage;
  }

  // define name for application
  fillAppNamePage(pageName) {
    const appName = browser.$('//input[@type="text"]');
    appName.click();
    appName.setValue(pageName);
  }

  // select Region
  selectRegion(regionType) {
    const regName = browser.$('//span[text()="' + regionType + '"]');
    regName.click();
  }

  // 'Lightning App Builder' --> 'Page Title' (defined as 'Page App Title')
  get actualPageAppTitle() {
    const appTitle = browser.$('//div[@class="flex"]/div[contains(@class, "middle")]');
    return appTitle.getText();
  }

  // 'Search components' search field and return 'Source'
  searchComponents(comp) {
    const srchField = browser.$('//input[@type="search"]');
    srchField.click();
    srchField.setValue(comp);

    const compSource = browser.$('//span[text()="' + comp + '"]');
    compSource.waitForDisplayed();
    return compSource;
  }

  // destination for drag&drop operation
  get destinationPlace() {
    return browser.$('//div[contains(@class, "PlaceholderWrapper")]');
  }
}

export default new LightningAppBuilderPage();

