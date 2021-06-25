import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('Clicking the upper left square adds an X to that square', async () =>{
    await driver.findElement(By.id('cell-0')).click();

    await driver.sleep(2000);
});

test('Clicking center square will add an X', async () => {
    await driver.findElement(By.id('cell-4')).click();

    await driver.sleep(2000);
});

test('Message is displayed for the winner', async () => {
    await driver.findElement(By.id('cell-6')).click();
    await driver.sleep(1000);
    await driver.findElement(By.id('cell-7')).click();
    await driver.sleep(1000);
    await driver.findElement(By.id('cell-8')).click();
    await driver.sleep(2000);
});