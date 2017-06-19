import { ProjetoSassPage } from './app.po';

describe('projeto-sass App', () => {
  let page: ProjetoSassPage;

  beforeEach(() => {
    page = new ProjetoSassPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
