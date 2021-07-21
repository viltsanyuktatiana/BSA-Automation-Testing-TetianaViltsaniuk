const { expect } = require('chai');
const { App } = require('../src/pages');
const app = new App();
describe('Profile', function () {
  beforeEach(async function(){
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });
  afterEach(async function(){
    await browser.reloadSession();
  })

  it('should be able to editProfile', async function () {

    await app.authPage.authorization({
      email: 'viltsanyuktatiana@gmail.com',
      password: 'Pa55word',
    });
      const profileButton = await $('.header_pagesSection__2Rgck a.link_link__3zEN3:nth-child(3)');
      await profileButton.waitForDisplayed({ timeout: 5000 });
      await profileButton.click();

    const editLink = await $('.styles_infoHeader__Ej0xQ span.styles_buttonIcon__2xI4i');
    await editLink.waitForDisplayed({ timeout: 5000 });
    await editLink.click();

    await app.authPage.profile({
      name: `Tatka0`,
      surname: 'Viltsaniuk0',
      birthDate: '11/11/1996',
      phone: '380998889999',
      gender: 'female',
    });
      
    await browser.waitUntil(
        async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/user-profile/b510a63e-3659-4f86-87c8-504b025bcf51';
      },
      { timeout: 5000 },
    );
      const url = await browser.getUrl();
        expect(url).to.be.eql('http://46.101.234.121/user-profile/b510a63e-3659-4f86-87c8-504b025bcf51');
        
        
    });
});