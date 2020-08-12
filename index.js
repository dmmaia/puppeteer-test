const puppeteer = require('puppeteer');
const fs = require('fs');
const { throws } = require('assert');

(async() => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('https://www.instagram.com/sordavidmaia');
    
    const imgList = await page.evaluate(()=>{
        const nodeList = document.querySelectorAll('article img');

        const imgArray = [...nodeList];

        const imgList = imgArray.map( ({src}) => ({
            src
        }))

        return imgList;
    });

    fs.writeFile('instagram.json', JSON.stringify(imgList, null, 2), err =>{
        if(err) throw new Error('Deu errado aqui, fera');

        console.log('Nothing to report')
    })

    await browser.close();
})();
