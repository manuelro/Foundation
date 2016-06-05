export class FoundationPage {
  navigateTo(destination: string = '/') {
    return browser.get(destination);
  }

  enterSearchCriteria(inputKeys) {
    return element(by.css('input.qa-filter-input')).sendKeys(inputKeys);
  }

  getElementsByClass(qaClass) {
    return element.all(by.css(qaClass));
  }

  getElementsCountByClass(qaClass) {
    return element.all(by.css(qaClass)).count();
  }
}
