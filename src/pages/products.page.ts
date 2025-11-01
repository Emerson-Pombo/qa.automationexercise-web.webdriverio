import BasePage from './base.page';

class ProductsPage extends BasePage {
    get searchInput() {
        return $('#search_product');
    }

    get searchBtn() {
        return $('#submit_search');
    }

    get searchedProductsTitle() {
        return $('h2.title.text-center');
    }

    get searchResults() {
        return $$('.productinfo.text-center');
    }

    productCard(index: number) {
        return $(`(//div[@class='product-image-wrapper'])[${index}]`);
    }

    addToCartBtn(index: number) {
        return $(`(//a[contains(@class, 'add-to-cart')])[${index}]`);
    }

    get viewCartBtn() {
        return $('a[href="/view_cart"]');
    }

    get continueShoppingBtn() {
        return $('button.btn.btn-success.close-modal.btn-block');
    }

    addToCartById(id: number) {
        return $(`a[data-product-id="${id}"]`);
    }

    async addProductToCartById(id: number) {
        const button = await this.addToCartById(id);
        await button.scrollIntoView();
        await button.waitForDisplayed({ timeout: 10000 });
        await button.waitForClickable({ timeout: 10000 });
        await button.click();
    }

       async clickContinueShopping() {
        const button = await this.continueShoppingBtn;
        await button.waitForDisplayed({ timeout: 10000 });
        await button.click();

        const modal = await $('#cartModal');
        await browser.waitUntil(async () => !(await modal.isDisplayed()), {
            timeout: 10000,
            timeoutMsg: 'O modal ainda está visível após 10s',
        });
    }
}

export default new ProductsPage();
