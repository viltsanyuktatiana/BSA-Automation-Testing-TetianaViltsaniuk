const { expect } = require('chai');

let emails =['john_admin1@admin.com', 'john_admin2@admin.com', 'john_admin2@admin.com', 'viltsanyuktatiana@gmail.com'];
var rand = emails[~~(Math.random() * emails.length)];

describe('Authorization', function () {

  it('should be able to authorization', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(rand);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');
    
    await browser.reloadSession();

    });
});

describe('AuthorizationEmpty', function () {

  it('should be disable to authorization', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue();

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue();

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');
    
    await browser.reloadSession();

    });
});

describe('AuthorizationInvalid', function () {

  it('should be disable to authorization', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(rand);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Password');

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');
    
    await browser.reloadSession();

    });
});