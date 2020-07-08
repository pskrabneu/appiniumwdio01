// For short testing purposes
import DataProviderComponent from '../pages/utils/data-provider.component';
import TeamsSfPage from '../pages/teams-sf.page';
import Page from '../pages/page';

const fsLibrary = require('fs');

describe('Add Post Code to the Territory', function() {
  it('should be!!', function() {
    console.log('\n-----\n' +
        DataProviderComponent.randomParentTeamName +
        '\n-----\n');
  });

  it('should be1!!', function() {
    const data = '!!!Hello world!!!';
    const fPath = './property/temp-test/newfile.txt';

    fsLibrary.writeFile(fPath, data, (error) => {
      // In case of a error throw err exception.
      if (error) {
        throw err;
      }
    });

    fsLibrary.readFile(fPath, (error, txtString) => {

      if (error) {
        throw err;
      }
      console.log(txtString.toString());
    });

    console.log('=== ' + ' ===');
    console.log('===' + Page.WAITING_MEDIUM + '===');
  });
});
