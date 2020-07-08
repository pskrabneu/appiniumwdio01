class ArrayOperationsComponent {
  // takes an array of elements and
  // find one element that is visible.
  // returns 'false' in case more than one element
  // is visible or array doesn't contain
  // visible elements
  oneVisible(array) {
    const steps = array.length;
    // const infoText = 'Array Operations: Element ';
    if (steps > 0) {
      // console.log('Array size = ' + steps);
      for (let i = 0; i < steps; i++) {
        if (array[i].isDisplayed()) {
          // console.log(infoText + i + ' is displayed\n');
          return array[i];
        } else {
          // console.log(infoText + i + ' is not displayed\n');
        }
      }
    } else {
      return false;
    }
  }

  // takes an array of web-elements and an element
  // and return 'true' if the array contains this element
  // return 'false' in case array has no elements
  // or the array doesn't contain the element
  isContainsElement(array, textValue) {
    const size = array.length;

    // rule
    const isContains = (currentValue) => currentValue.getText().isEqual(textValue);
    let x;

    if (size > 0) {
      x = array.some(isContains);
      return x;
    } else {
      x = false;
      return x;
    }
  }

  // takes an array of web-elements
  // and check if any element "isDisplayed"
  // return "true" if at least one element is displayed
  // return "false" if no element is displayed
  // or there are no such elements
  noDisplayed(array) {
    const size = array.length;

    // rule
    const isDisplayed = (currentValue) => currentValue.isDisplayed();
    let x;

    if (size > 0) {
      x = array.some(isDisplayed);
      return x;
    } else {
      x = false;
      return x;
    }
  }
}

export default new ArrayOperationsComponent();
