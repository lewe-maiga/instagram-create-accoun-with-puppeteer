 const puppeteer = require('puppeteer-core')
 const faker = require('faker')
 const url = 'https://www.instagram.com/'
 
 const name = faker.name.findName()
 const password = faker.internet.password(8)
 const email = "+1 734 600 0011"

 const button = "button.sqdOP.L3NKy._4pI4F.y3zKF"
 const select = "select.h144Z"
 const input = "input._2hvTZ.pexuQ.zyHYP"
 const span = 'span.coreSpriteInputRefresh.Szr5J'
 const a = "span._7UhW9.xLCgt.qyrsm.gtFbE.se6yk"


async function inscription() {
    const browser = await puppeteer.launch({headless : false, executablePath :"C:\\Users\\badra\\AppData\\Local\\Chromium\\Application\\chrome.exe"})
    const page = await browser.newPage()
    await page.goto(url)
    await page.waitForSelector(a)
    await page.click(a)
    await page.waitFor(2000)
    
    await page.waitForSelector(input)
    await page.focus(input)
    await page.keyboard.type(email)
    await page.keyboard.press('Tab')
    await page.keyboard.type(name)
    await page.keyboard.press('Tab')
    await page.waitForSelector(span)
    await page.click(span)
    //await page.keyboard.type(username)
    await page.keyboard.press('Tab')    
    await page.keyboard.type(password)
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')
    await page.waitForSelector(select)
    await page.focus(select)
    await page.keyboard.press('Tab')
    
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')
    await page.keyboard.press('1')
    await page.keyboard.press('1')
    await page.keyboard.press('Enter')
    await page.click(button)
    //await page.waitForSelector( selector => document.querySelectorAll(selector))
}
inscription()