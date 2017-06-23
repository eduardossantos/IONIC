import { DiretivaNgClassPage } from './app.po';

describe('diretiva-ng-class App', () => {
  let page: DiretivaNgClassPage;

  beforeEach(() => {
    page = new DiretivaNgClassPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
