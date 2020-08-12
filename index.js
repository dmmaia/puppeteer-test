const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://www.google.com.br/');
    await page.screenshot({ path: 'screenshot.png'});
    

    await browser.close();
})();
