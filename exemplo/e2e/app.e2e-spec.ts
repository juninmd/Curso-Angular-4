import { ExemploPage } from './app.po';

describe('exemplo App', () => {
  let page: ExemploPage;

  beforeEach(() => {
    page = new ExemploPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
