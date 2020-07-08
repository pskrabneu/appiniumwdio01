export default class Page {
  static WAITING_SUPRBIG = 10000;
  static WAITING_BIG = 8000;
  static WAITING_MEDIUM = 5000;
  static WAITING_SMALL = 2000;

  constructor() {
    this.appTitle = 'My Page';
    this.pageTitle = 'My Page Title';
    this.webForm0 = 'Web form';
    this.webForm1a = 'Web form';
    this.webForm1b = 'Web Form';
  }

  open(path) {
    browser.url(path);
  }
}

