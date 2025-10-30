export default class BasePage {
    async open(path: '/') {
        await browser.url(path);
    }

    async click(element: WebdriverIO.Element) {
        await element.waitForClickable( { timeout: 5000 });
        await element.click();
    }

    async type(element: WebdriverIO.Element, value: string) {
        await element.waitForDisplayed( { timeout: 5000 });
        await element.setValue(value);
    }

    async selectByVisibleText(element: WebdriverIO.Element, text: string) {
        await element.waitForDisplayed( { timeout: 5000 });
        await element.selectByVisibleText(text);
    }
}