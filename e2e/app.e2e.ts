import { FoundationPage } from './app.po';

describe('foundation App', function() {
  let page: FoundationPage;

  beforeEach(() => {
    page = new FoundationPage();
  });

  it('should react to valid search criteria', () => {
    page.navigateTo();
    page.enterSearchCriteria('Toyota');

    let expected = 1;
    let actual = page.getElementsCountByClass('.qa-make-list__item');

    expect(actual).toEqual(expected);
  });

  it('should react to invalid search criteria', () => {
    page.navigateTo();
    page.enterSearchCriteria('Foobar');

    let expected = 0;
    let actual = page.getElementsCountByClass('.qa-make-list__item');

    expect(actual).toEqual(expected);
  });

  it('should display no-results message when nothing found', () => {
    page.navigateTo();
    page.enterSearchCriteria('Foobar');

    let expected = 1;
    let actual = page.getElementsCountByClass('.qa-no-results-message');

    expect(actual).toEqual(expected);
  });

  it('should navigate to make detail on make click', () => {
    page.navigateTo();
    page.enterSearchCriteria('Toyota');

    let element = page.getElementsByClass('.qa-make-list__item a');

    element.click().then(
      () => {
        expect(browser.getCurrentUrl()).toContain('toyota');
      }
    );

  });

});
