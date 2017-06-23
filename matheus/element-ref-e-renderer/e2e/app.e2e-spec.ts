import { ElementRefERendererPage } from './app.po';

describe('element-ref-e-renderer App', () => {
  let page: ElementRefERendererPage;

  beforeEach(() => {
    page = new ElementRefERendererPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
