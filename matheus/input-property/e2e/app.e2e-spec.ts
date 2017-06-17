import { InputPropertyPage } from './app.po';

describe('input-property App', () => {
  let page: InputPropertyPage;

  beforeEach(() => {
    page = new InputPropertyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
