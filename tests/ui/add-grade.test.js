const { test, expect } = require('@playwright/test');

test('Check add grades page', async ({ page }) => {
    await page.goto('http://igotto1-grades.onrender.com/add-grade');
    const form = await page.$('div');
    expect(form).toBeTruthy();
  });
  