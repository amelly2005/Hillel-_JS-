//@ts-check
const { test, expect } = require('@playwright/test');
const { setTimeout } = require('timers');
// tests  for www.npmjs.com 
 test('Check the search field', async ({ page }) => {
      await page.goto('https://www.npmjs.com/package/node');
      await page.pause()
      await page.getByPlaceholder('Search packages').fill('node');
      await page.getByLabel('Search', { exact: true }).click();
      await expect (page.getByRole('heading', { name: 'packages found' })).toBeVisible();
 });



 test('Copy install command line', async ({ page }) => {
   await page.goto('https://www.npmjs.com/package/node');
   await page.getByPlaceholder('Search packages').fill('playwright');
   await page.getByLabel('Search', { exact: true }).click();
   await page.locator('div').filter({ hasText: /^playwrightexact match$/ }).getByRole('link').click();
   await expect (page.getByLabel('Copy install command line')).toBeVisible();
}) 
 
// tests 2  for  https://giphy.com/

test('gif is added to favorite list', async ({ page }) => {
  await page.goto('https://giphy.com');
  await page.getByLabel('Agree and close: Agree to our').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByPlaceholder('@username to search channels').click();
  await page.getByPlaceholder('Search all the GIFs and').click();
  await page.getByPlaceholder('Search all the GIFs and').fill('mad');
  await page.getByPlaceholder('Search all the GIFs and').press('Enter');
  await page.getByRole('link', { name: 'The Office gif. Steve Carrell' }).click();
  await page.locator('.FavoriteIcon-sc-ivas63').click();
  await expect(page.locator('.FavoriteIcon-sc-ivas63')).toBeVisible();

});

test('gif is selected from menu animals', async ({ page }) => {
  await page.goto('https://giphy.com');
  await page.getByLabel('Agree and close: Agree to our').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('ul').filter({ hasText: 'ReactionsEntertainmentSportsStickersArtists' }).locator('div').click();
  await page.getByRole('link', { name: 'Animals', exact: true }).click();
  await page.getByRole('link', { name: 'animal planet corgi GIF corgi' }).click();
  await page.getByRole('link', { name: 'Video gif. Someone holds an' }).click();
  await expect(page.getByRole('heading', { name: 'Angry Corned Beef And Cabbage' })).toBeVisible();;

});


//tests 3  for https://radioplayer.ua/


test('the radio is selected', async ({ page }) => {
   await page.goto('https://radioplayer.ua/');
   await page.getByRole('link', { name: 'Слухати радіо онлайн на нашому сайті' }).click();
   await page.getByRole('link', { name: 'Люкс ФМ', exact: true }).click()
   await expect(page.getByRole('img', { name: 'Зупинити' }).locator('path')).toBeVisible()
  

  });

  test('check the list of favorite radio stations', async ({ page }) => {
    await page.goto('https://radioplayer.ua/');
    await page.getByRole('link', { name: 'Слухати радіо онлайн на нашому сайті' }).click();
    await page.getByRole('img', { name: 'Radio NOSTALGIE' }).click();
    await page.locator('i').first().click();
    await page.getByRole('img', { name: 'Авторадіо' }).click();
    await page.locator("i").first().click();
    await page.getByRole("img", { name: "Київ FM" }).click();
    await page.locator("i").first().click();
    await page.getByRole("img", { name: "Радіо Незалежність" }).click();
    await page.locator("i").first().click();
    await page.locator("i").nth(2).click();
    await page.locator(".box-choice-channel > div").first().click();

    await expect(page.getByRole('img', { name: 'Радіо Незалежність' }).nth(1)).toBeVisible();

    await expect(page.getByRole('img', { name: 'Київ FM' }).nth(1)).toBeVisible();
    
    await expect(page.getByRole('img', { name: 'Radio NOSTALGIE' }).nth(1)).toBeVisible();

  })

 