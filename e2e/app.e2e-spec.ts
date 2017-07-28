import { PmMojoPage } from './app.po';

describe('pm-mojo App', () => {
  let page: PmMojoPage;

  beforeEach(() => {
    page = new PmMojoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
