import { BengalingPage } from './app.po';

describe('bengaling App', () => {
  let page: BengalingPage;

  beforeEach(() => {
    page = new BengalingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
