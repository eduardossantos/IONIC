import { DiretivaNgForPage } from './app.po';

describe('diretiva-ng-for App', () => {
  let page: DiretivaNgForPage;

  beforeEach(() => {
    page = new DiretivaNgForPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
