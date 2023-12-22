const { test, expect } = require('@playwright/test');

test('Check grades page', async ({ page }) => {
    await page.goto('http://igotto1-grades.onrender.com/my-grades');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  