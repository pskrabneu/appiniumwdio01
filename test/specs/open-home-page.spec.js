import { describe } from 'mocha';

/* PAGES IMPORT */
import HomePage from '../pages/home-page';
import SetupPage from '../pages/setup-page';
import LightningAppBuilderPage from '../pages/lightning-app-builder-page';
import ArrayOperationsComponent from '../pages/utils/array-operations.component';

describe('Open Home Page:', function() {
  it('title should contains \'Course\' word', function() {
    HomePage.performSysAdminLogin();
    const pageTitle = browser.getTitle();
    expect(pageTitle).toContain('Course');
    utilities.takeScreenshot('open_home_page');
  });

  it('should open \'Lightning App Builder\' page', function() {
    browser.url('https://provar41.lightning.force.com/lightning/setup/SetupOneHome/home');
    SetupPage.takeFilteredItemPage('Lightning App Builder', LightningAppBuilderPage);
    const pageTitle = LightningAppBuilderPage.takeActualPageTitle;
    expect(pageTitle).toEqual(LightningAppBuilderPage.pageTitle);
    utilities.takeScreenshot('open_lightning_app_builder_page');
  });

  it('should open \'Create a new Lightning page\' web-form', function() {
    // switch to iframe
    const pageFrames = browser.$$('//iframe');
    const fr = ArrayOperationsComponent.oneVisible(pageFrames);
    browser.switchToFrame(fr);
    // click on New button
    LightningAppBuilderPage.clickNewBtn;

    const wf1Title = LightningAppBuilderPage.takeWF1Title;
    expect(wf1Title).toEqual('Create a new Lightning page');
    utilities.takeScreenshot('open_create_new_lightning_page_web_form');
  });

  it('should open \'Lightning App Builder\' with proper title', function() {
    const pageAppTitle = 'TestApp001';
    // click on "App Page"
    LightningAppBuilderPage.clickAppPage;
    LightningAppBuilderPage.clickNextBtnWf1('N');
    LightningAppBuilderPage.fillAppNamePage(pageAppTitle);
    LightningAppBuilderPage.clickNextBtnWf1('N');
    LightningAppBuilderPage.selectRegion('One Region');
    LightningAppBuilderPage.clickNextBtnWf1('F');
    const actualTitle = LightningAppBuilderPage.actualPageAppTitle;
    expect(actualTitle).toEqual(pageAppTitle);
    utilities.takeScreenshot('open_app_builder_page');
  });
});


