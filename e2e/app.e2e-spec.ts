import { Playng4Page } from './app.po';

describe('playng4 App', () => {
  let page: Playng4Page;

  beforeEach(() => {
    page = new Playng4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
