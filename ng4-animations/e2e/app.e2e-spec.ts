import { Ng4AnimationsPage } from './app.po';

describe('ng4-animations App', () => {
  let page: Ng4AnimationsPage;

  beforeEach(() => {
    page = new Ng4AnimationsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
