const { expect } = require('chai');

describe('Profile', function () {

  it('should be able to editProfile', async function () {

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
      const profileButton = await $('.header_pagesSection__2Rgck a.link_link__3zEN3:nth-child(3)');
      await profileButton.waitForDisplayed({ timeout: 5000 });
      await profileButton.click();
    }

    const editLink = await $('.styles_infoHeader__Ej0xQ span.styles_buttonIcon__2xI4i');
    await editLink.waitForDisplayed({ timeout: 5000 });
    await editLink.click();

    const nameField = await $('.styles_inputBlock__102wB input[name="name"]');
    const surnameField = await $('input[name="surname"]');
    const birthdateField = await $('input[name="birthdate"]');
    const phoneField = await $('input[name="phone"]');
    const editButton = await $('.styles_editForm__1rOFS button:nth-child(1)');
    const ddls = await $$('div.selectStyles__control');
    const genderDdl = ddls[2];
    const femaleOption = await $('div.selectStyles__option=female');
        
    await nameField.waitForDisplayed({ timeout: 5000 });
    await nameField.setValue('Tatka1');
      
    await surnameField.waitForDisplayed({ timeout: 5000 });
    await surnameField.setValue('Viltsaniuk1');

    await birthdateField.waitForDisplayed({ timeout: 5000 });
    await birthdateField.setValue('11/11/1996');
       
    await phoneField.waitForDisplayed({ timeout: 5000 });
    await phoneField.setValue('0970290337');
      
    await genderDdl.waitForDisplayed({ timeout: 5000 });
    await genderDdl.click();

    await femaleOption.waitForDisplayed({ timeout: 5000 });
    await femaleOption.click();

    await editButton.waitForDisplayed({ timeout: 5000 });
    await editButton.click();
      
    await browser.waitUntil(
        async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/user-profile/b510a63e-3659-4f86-87c8-504b025bcf51';
      },
      { timeout: 5000 },
    );
      const url = await browser.getUrl();
        expect(url).to.be.eql('http://46.101.234.121/user-profile/b510a63e-3659-4f86-87c8-504b025bcf51');
        
        await browser.reloadSession();
        
    });
});