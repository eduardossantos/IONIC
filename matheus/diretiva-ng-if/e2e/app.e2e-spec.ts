import { DiretivaNgIfPage } from './app.po';

describe('diretiva-ng-if App', () => {
  let page: DiretivaNgIfPage;

  beforeEach(() => {
    page = new DiretivaNgIfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
