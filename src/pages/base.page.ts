export default class BasePage {
    async open(path: string) {
        await browser.url(path);
    }

    async click(element: ChainablePromiseElement<WebdriverIO.Element>) {
        await element.waitForClickable({ timeout: 10000 });
        await element.click();
    }

    async type(
        element: ChainablePromiseElement<WebdriverIO.Element>,
        value: string
    ) {
        await element.waitForDisplayed({ timeout: 10000 });
        await element.setValue(value);
    }

    async select(
        element: ChainablePromiseElement<WebdriverIO.Element>,
        value: string
    ) {
        await element.waitForDisplayed({ timeout: 10000 });
        await element.selectByVisibleText(value);
    }
}
