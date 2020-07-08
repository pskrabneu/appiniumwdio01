// 'Opportunity' tab page (Opportunity-sf.page.js)

/* PAGES IMPORT */
import Page from './page';

/* COMMON COMPONENTS IMPORT */
import DataProvider from './utils/data-provider.component';
import ArrayOperationsComponent from './utils/array-operations.component';

class OpportunitySfPage extends Page {
  /* VARIABLES */
  // web-form


  /* CONSTANTS */
  constructor() {
    super();
    this.appTitle = 'Opportunities';
    this.pageTitle = 'Opportunity';
    this.webForm = 'New Opportunity';
  }

  /* ELEMENTS */
  // App Name Title
  get actualAppNameTitle() {
    return $$('//div/nav[@role="navigation"][@aria-label="Breadcrumbs"]/ol/li/span');
  }

  get newBtn() {
    return $$('//a[@title="New"][@role="button"]/div[@title="New"]');
  }

  // web-form "Create Lead"
  // Title of the web-form
  get actualTitleWf() {
    return $$('//div[@class="isModal inlinePanel oneRecordActionWrapper"]//h2');
  }

  // Alert area
  get alertArea() {
    return $$('//span/span/div[contains(@class,"error")][@role="alert"]');
  }

  get directClientOption() {
    return $('//span[text()="Direct Client"]/../../div[@class="changeRecordTypeOptionLeftColumn"]/input[@type="radio"]');
  }

  get next() {
    return $('//span[text()="Next"]');
  }

  get accountRecord() {
    return $('//div[@title="Auto Test Account"]');
  }

  get searchAccounts() {
    return $('//span[text()="Trading Name"]/../..//input[@title="Search Accounts"]');
  }

  get opportunityName() {
    return $('//span[text()="Opportunity Name"]/../../input');
  }

  get signOffDate() {
    return $('//span[text()="Sign-Off Date"]/../../div[@class="form-element"]/input');
  }

  get stage() {
    return $('//span[text()="Stage"]/../..//a[@class="select"]');
  }

  get numberOfWeeks() {
    return $('//span[text()="No. of Weeks"]/../../input');
  }

  get likelyCampaignStartDate() {
    return $('//span[text()="Likely Campaign Start Date"]/../../div[@class="form-element"]/input');
  }

  get save() {
    return $('//button[@class="slds-button slds-button--neutral uiButton--brand uiButton forceActionButton"]//span[text()="Save"]');
  }

  get speculativeOption() {
    return $('//a[text()="Speculative"]');
  }

  get probability() {
    return $('//span[text()="Probability (%)"]/../../input');
  }


  /* ACTIONS */
  // Click on New button for open web-form
  get clickNewBtn() {
    (ArrayOperationsComponent.oneVisible(this.newBtn)).click();
    return OpportunitySfPage;
  }

  get takeActualAppNameTitle() {
    return (ArrayOperationsComponent.oneVisible(this.actualAppNameTitle)).getText();
  }

  // return actual title of the web-form
  get takeActualTitleWf() {
    browser.pause(Page.WAITING_MEDIUM);
    return (ArrayOperationsComponent.oneVisible(this.actualTitleWf)).getText();
  }

  get selectDirectClient() {
    browser.pause(Page.WAITING_SMALL);
   // this.directClientOption.click();
    browser.pause(Page.WAITING_MEDIUM);
    this.next.click();
    browser.pause(Page.WAITING_MEDIUM);
    return OpportunitySfPage;
  }

createOpportunity(tradingName, opportunityName) {
    browser.pause(Page.WAITING_SMALL);
    this.searchAccounts.setValue(tradingName);
    this.accountRecord.click();
    this.opportunityName.setValue(opportunityName);
    this.signOffDate.setValue("15/05/2020");
    this.stage.click();
    browser.pause(Page.WAITING_SMALL);
    this.speculativeOption.click();
    this.probability.setValue("20");
    this.numberOfWeeks.setValue("10");
    this.likelyCampaignStartDate.setValue("25/05/2020");
    this.save.click();
    browser.pause(20000);
  }

  // is any area displayed?
  get isAlertAreaDisplayed() {
    return (ArrayOperationsComponent.oneVisible(this.alertArea)).isDisplayed();
  }

    // check "Opportunity Name" from left side
    get getOpportunityName() {
      const oppName = browser.$('//slot[@name="primaryField"]/slot/lightning-formatted-text');
      return oppName.getText();
    }

}

export default new OpportunitySfPage();


