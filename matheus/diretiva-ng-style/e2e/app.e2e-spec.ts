import { DiretivaNgStylePage } from './app.po';

describe('diretiva-ng-style App', () => {
  let page: DiretivaNgStylePage;

  beforeEach(() => {
    page = new DiretivaNgStylePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
