/* PAGES IMPORT */
import Page from './page';

// import Objects from '../../support/utils/objects.json';

class SetupPage extends Page {
  /* ELEMENTS */
  get quickFindSearch() {
    return browser.$('//input[@type="search" and @placeholder="Quick Find"]');
  }

  /* ACTIONS */
  takeFilteredItemPage(desiredItem, itemPage) {
    this.quickFindSearch.click();
    this.quickFindSearch.setValue(desiredItem);

    const item = browser.$('//li/div[@title="' +desiredItem +'"]/a');
    item.waitForDisplayed();
    item.click();
    browser.pause(Page.WAITING_BIG);
    return itemPage;
  }
}

export default new SetupPage();

