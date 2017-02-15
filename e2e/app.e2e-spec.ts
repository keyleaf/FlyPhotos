import { FlyPhotos.GitPage } from './app.po';

describe('fly-photos.git App', function() {
  let page: FlyPhotos.GitPage;

  beforeEach(() => {
    page = new FlyPhotos.GitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
