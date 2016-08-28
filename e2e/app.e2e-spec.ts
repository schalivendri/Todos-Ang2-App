import { Ang2ExPage } from './app.po';

describe('ang2-ex App', function() {
  let page: Ang2ExPage;

  beforeEach(() => {
    page = new Ang2ExPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
