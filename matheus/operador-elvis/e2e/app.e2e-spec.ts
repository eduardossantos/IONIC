import { OperadorElvisPage } from './app.po';

describe('operador-elvis App', () => {
  let page: OperadorElvisPage;

  beforeEach(() => {
    page = new OperadorElvisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
