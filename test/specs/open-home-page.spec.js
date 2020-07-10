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

  it('should perform Drag&Drop operation', function() {
    const src = LightningAppBuilderPage.searchComponents('All Media');

    console.log(
        '\nWindow size width = ' + browser.getWindowSize().width +
      '\nWindow size height = ' + browser.getWindowSize().height +
      '\nWindow rect width = ' + browser.getWindowRect().width +
      '\nWindow rect height = ' + browser.getWindowRect().height);

    // src parameters
    const srcWidth = src.getSize().width;
    const srcHeight = src.getSize().height;
    const srcLocationX = src.getLocation().x;
    const srcLocationY = src.getLocation().y;

    console.log(
        '\nSrc size width = ' + srcWidth +
      '\nSrc size height = ' + srcHeight +
      '\nSrc location x = ' + srcLocationX +
      '\nSrc location y = ' + srcLocationY);

    const pageFrames = browser.$$('//iframe');
    const fr = ArrayOperationsComponent.oneVisible(pageFrames);
    browser.switchToFrame(fr);

    const dest = LightningAppBuilderPage.destinationPlace;

    // dest parameters
    const destWidth = dest.getSize().width;
    const destHeight = dest.getSize().height;
    const destLocationX = dest.getLocation().x;
    const destLocationY = dest.getLocation().y;

    console.log(
        '\nDest size width = ' + destWidth +
      '\nDest size height = ' + destHeight +
      '\nDest location x = ' + destLocationX +
      '\nDest location y = ' + destLocationY);

    browser.switchToParentFrame();

    browser.pause(1000);

    // browser.touchAction -> only with Appium
    // browser.actions -> is not a function
    browser.performActions([
      {
        'type': 'pointer',
        'id': 'mouse2',
        'parameters': { 'pointerType': 'mouse' },
        'actions': [
          // { 'type': 'positionMove', 'duration': 3000, 'x': srcLocationX, 'y': srcLocationY },
          { 'type': 'pointerMove', 'duration': 3000, 'x': srcLocationX + 5, 'y': srcLocationY + 5 },
          { 'type': 'pointerDown', 'button': 0 },
          { 'type': 'pause', 'duration': 3000 },
          // eslint-disable-next-line max-len
          // { 'type': 'pointerMove', 'duration': 5500, 'origin': 'pointer', 'x': 400, 'y': -200 },
          // eslint-disable-next-line max-len
          // { 'type': 'pointerMove', 'duration': 2500, 'origin': 'pointer', 'x': 400, 'y': (destLocationY - srcLocationY) },
          { 'type': 'pointerMove', 'duration': 2500, 'origin': 'pointer', 'x': 500, 'y': -250 },
          { 'type': 'pointerUp', 'button': 0 },
        ],
      },
    ]);

    browser.releaseActions();
    browser.pause(15000);

    /*    console.log('\nSrc is clickble = ' + src.isExisting() + '\n' +
        'Dest is clickble = ' + dest.isExisting());*/

    // dran&drop --begin--
    /*    browser.performActions([
      {
        "type": "pointer",
        "id": "mouse1",
        "parameters": { "pointerType": "mouse" },
        "actions": [
          { "type": "pointerMove", "duration": 0, "x": parseInt(xTotal), "y": parseInt(yTotal)},
          { "type": "pointerDown", "button": 1},
          { "type": "pause", "duration": 5000},
          { "type": "pointerMove", "duration": 500, "origin": "pointer", "x": width , y: 0},
          { "type": "pointerUp", "button": 1}
        ]
      }
    ]);*/

    // --------------------
    // do a horizontal swipe by percentage
    /* const startPercentage = 10;
    const endPercentage = 90;
    const anchorPercentage = 50;

    const { width, height } = driver.getWindowSize();
    const anchor = height * anchorPercentage / 100;
    const startPoint = width * startPercentage / 100;
    const endPoint = width * endPercentage / 100;*/
    /* driver.touchPerform([
      {
        action: 'press',
        options: {
          x: startPoint,
          y: anchor,
        },
      },
      {
        action: 'wait',
        options: {
          ms: 100,
        },
      },
      {
        action: 'moveTo',
        options: {
          x: endPoint,
          y: anchor,
        },
      },
      {
        action: 'release',
        options: {},
      },
    ]);*/
    // dran&drop --end--
  });
});


