import { ExemploNgContentPage } from './app.po';

describe('exemplo-ng-content App', () => {
  let page: ExemploNgContentPage;

  beforeEach(() => {
    page = new ExemploNgContentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
