const { expect } = require('chai');

describe('Speciallty', function () {

  it('should be able to changeSpecialty', async function () {
  
    await browser.setWindowSize(1440, 960);
    await browser.url('/user-profile/b510a63e-3659-4f86-87c8-504b025bcf51');
    const currentUrl = await browser.getUrl();
    if(currentUrl.includes('/sign-in')){
      const emailField = await $('input[name="email"]');
      const passwordField = await $('input[name="password"]');
      const signInButton = await $('button');

      await emailField.waitForDisplayed({ timeout: 5000 });
      await emailField.setValue('viltsanyuktatiana@gmail.com');

      await passwordField.waitForDisplayed({ timeout: 5000 });
      await passwordField.setValue('Pa55word');

      await signInButton.waitForDisplayed({ timeout: 5000 });
      await signInButton.click();
      const profileButton = await $('a[class="link_link__3zEN3"]');
      await profileButton.waitForDisplayed({ timeout: 5000 });
      await profileButton.click();
    }
    const ddls = await $$('div.selectStyles__control');
    const genderDdl = ddls[2];
    const femaleOption = await $('div.selectStyles__option=female');

    });
  });