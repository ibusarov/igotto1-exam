const { test, expect } = require('@playwright/test');

test('Check header', async ({ page }) => {
    await page.goto('http://igotto1-grades.onrender.com'); 
    const homeLink = await page.$('a');
    const text = await homeLink.textContent();
    expect(text).toBe('Home');
  });
  