import { describe } from 'mocha';

/* PAGES IMPORT */
import HomePage from '../pages/home-page';

describe('Open Home Page:', function() {
  it('title should contains \'Course\' word', function() {
    HomePage.performSysAdminLogin();
    const pageTitle = browser.getTitle();
    console.log('==> ' + pageTitle + ' <==');
    expect(pageTitle).toContain('Course');
    utilities.takeScreenshot('open_home_page');
  });
});


