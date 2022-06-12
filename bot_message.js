const puppeteer = require('puppeteer-core')

async function getMessage(){
    const browser = await puppeteer.launch({headless : false, executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'})
    const page = await browser.newPage()
    await page.goto("https://messages.google.com/web/authentication")
    await page.screenshot({ path : 'qrcode.png ' })
    await browser.close()
}

getMessage()
