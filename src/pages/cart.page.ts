import BasePage from './base.page';

class CartPage extends BasePage {
    get cartTitle() {
        return $('ol.breadcrumb li.active');
    }

    get cartItems() {
        return $$('//tbody/tr');
    }

    get emptyCartMessage() {
        return $('#empty_cart');
    }

    async getProductName(row: number) {
        return await $(`#cart_info_table tbody tr:nth-child(${row}) td.cart_description h4 a`).getText();
    }

    async getProductPrice(row: number) {
        return await $(`#cart_info_table tbody tr:nth-child(${row}) td.cart_price p`).getText();
    }

    async getProductQuantity(row: number) {
        return await $(`#cart_info_table tbody tr:nth-child(${row}) td.cart_quantity button`).getText();
    }

    async getProductTotal(row: number) {
        return await $(`#cart_info_table tbody tr:nth-child(${row}) td.cart_total p`).getText();
    }

    removeProductBtn(productId: number) {
        return $(`a.cart_quantity_delete[data-product-id="${productId}"]`);
    }

    async removeProductById(productId: number) {
        const button = await this.removeProductBtn(productId);
        await button.waitForDisplayed({ timeout: 5000 });
        await button.click();

        await browser.pause(1000); // pausa leve para o refresh
        await browser.waitUntil(
            async () => !(await button.isExisting()),
            {
                timeout: 5000,
                timeoutMsg: `Produto com ID ${productId} ainda está no carrinho após 5s`,
            }
        );
    }

    async removeAllProducts() {
        const products = await this.cartItems;
        for (const item of products) {
            const btn = await item.$('.cart_quantity_delete');
            await btn.click();
            await browser.pause(500); // pequena pausa entre as remoções
        }
    }
}

export default new CartPage();
