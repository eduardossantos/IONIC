import { DiretivaNgSwitchCorretaPage } from './app.po';

describe('diretiva-ng-switch-correta App', () => {
  let page: DiretivaNgSwitchCorretaPage;

  beforeEach(() => {
    page = new DiretivaNgSwitchCorretaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
