import { DiretivaNgswitchPage } from './app.po';

describe('diretiva-ngswitch App', () => {
  let page: DiretivaNgswitchPage;

  beforeEach(() => {
    page = new DiretivaNgswitchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
