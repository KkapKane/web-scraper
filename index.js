

const puppeteer = require('puppeteer')

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url)

    const [el] = await page.$x('//*[@id="trending-home"]/div[1]/div[1]/div[1]/div/a/img')
    const src = await el.getProperty('src')
    const imgSrc = await src.jsonValue();
    console.log({imgSrc});
    
    browser.close();

}

scrapeProduct('https://zoro.to/home')
