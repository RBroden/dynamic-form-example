import { MaterialPracticePage } from './app.po';

describe('material-practice App', () => {
  let page: MaterialPracticePage;

  beforeEach(() => {
    page = new MaterialPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
