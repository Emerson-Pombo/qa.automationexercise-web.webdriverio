import { expect } from '@wdio/globals';
import HomePage from '../../src/pages/home.page';
import ProductsPage from '../../src/pages/products.page';
import CartPage from '../../src/pages/cart.page';

describe('TC12 - Add Products in Cart', () => {
    it('should verify product prices, quantity and total in the cart', async () => {
        // Act
        await HomePage.open('/');
        await HomePage.click(HomePage.productsBtn);

        await ProductsPage.addProductToCartById(1);
        await ProductsPage.clickContinueShopping();

        await ProductsPage.addProductToCartById(2);
        await ProductsPage.viewCartBtn.click();

        // Assert
        await expect(CartPage.cartTitle).toBeDisplayed();

        // Produto 1
        expect(await CartPage.getProductName(1)).toBe('Blue Top');
        expect(await CartPage.getProductPrice(1)).toBe('Rs. 500');
        expect(await CartPage.getProductQuantity(1)).toBe('1');
        expect(await CartPage.getProductTotal(1)).toBe('Rs. 500');

        // Produto 2
        expect(await CartPage.getProductName(2)).toBe('Men Tshirt');
        expect(await CartPage.getProductPrice(2)).toBe('Rs. 400');
        expect(await CartPage.getProductQuantity(2)).toBe('1');
        expect(await CartPage.getProductTotal(2)).toBe('Rs. 400');
    });
});
