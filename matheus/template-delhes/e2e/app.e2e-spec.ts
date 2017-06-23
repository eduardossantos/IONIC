import { TemplateDelhesPage } from './app.po';

describe('template-delhes App', () => {
  let page: TemplateDelhesPage;

  beforeEach(() => {
    page = new TemplateDelhesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
