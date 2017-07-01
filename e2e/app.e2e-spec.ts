import { FashionPage } from './app.po';

describe('fashion App', () => {
  let page: FashionPage;

  beforeEach(() => {
    page = new FashionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
