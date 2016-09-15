import { SignatureCalculatorPage } from './app.po';

describe('signature-calculator App', function() {
  let page: SignatureCalculatorPage;

  beforeEach(() => {
    page = new SignatureCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
