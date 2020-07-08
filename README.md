Testing Appinium application with Mocha + WebdriverIO
====================
ATDD WEB tests with Mocha, WebdriverIO v6 with PageObject

Sample and ready to use boilerplate project for e2e / ui test automation with user as the QA Engineer in mind. 

## Features
- WebdriverIO v6
- Page Object model
- Component model example (reusable ui parts within a page)
- Sauce Labs integration [SauceLabs](https://saucelabs.com/)
- Allure Report
- Screenshot capture for failing tests
- ESLint

## How to Start

**Download a release or clone the project**

**Install**

```npm install```

**Run Tests**

```npm test```

**Allure Report**
(you must have installed [allure command line](https://docs.qameta.io/allure/#_get_started))

```npm run report```

**Microsoft Teams Mini Report**

```
export HOOK_URL=<microsoft_teams_webhook_url>
npm run report.teams
```
**Run specific test or suite**
```
$ npx wdio wdio.conf.js --suite currentTest
```

