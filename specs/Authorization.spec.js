const { expect } = require('chai');
const { App } = require('../src/pages');
let emails =['john_admin1@admin.com', 'viltsanyuktatiana@gmail.com'];
var rand = emails[~~(Math.random() * emails.length)];

const app = new App();
describe('Authorization', function () {
  beforeEach(async function(){
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });
  afterEach(async function(){
    await browser.reloadSession();
  })

  it('should be able to authorization', async function () {
    await app.authPage.authorization({
      email: rand,
      password: 'Pa55word',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');

  });
  
  it('should be disable to authorizationEmpty', async function () {

    await app.authPage.authorization({
      email: ``,
      password: '',
    });

    await browser.waitUntil(
      async function () {
        const error = await $('.styles_inputControl__1ZZvS>span');
        const textError = await error.getText();
        return textError === 'Email is required';
      },
      { timeout: 5000 },
    );
    await browser.waitUntil(
      async function () {
        const error = (await $$('.styles_inputControl__1ZZvS>span'))[1];
        const textError = await error.getText();
        return textError === 'Password must have at least 6 characters';
      },
      { timeout: 5000 },
    );
  });

  it('should be disable to authorizationInvalid', async function () {

    await app.authPage.authorization({
      email: rand,
      password: 'Password',
    });

    await browser.waitUntil(
      async function () {
        const error = await $('div.rrt-text');
        const textError = await error.getText();
        return textError === 'Password is incorrect';
      },
      { timeout: 5000 },
    );

  });

});

async function checkByText (tag, text) {
  const error = await $(tag);
  const textError = await error.getText();
  return textError === text;
}