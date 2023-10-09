import { ApPage } from './app.po';

describe('ap App', function() {
  let page: ApPage;

  beforeEach(() => {
    page = new ApPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
