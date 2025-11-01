import { expect } from '@wdio/globals';
import HomePage from '../../src/pages/home.page';
import ProductsPage from '../../src/pages/products.page';
import CartPage from '../../src/pages/cart.page';

describe('TC18 - Verify Cart is Empty After Removing All Products', () => {
    it('should display empty cart message after removing all products', async () => {
        // Arrange
        await HomePage.open('/');
        await HomePage.click(HomePage.productsBtn);

        await ProductsPage.addProductToCartById(1);
        await ProductsPage.clickContinueShopping();
        await ProductsPage.addProductToCartById(2);
        await ProductsPage.viewCartBtn.click();

        await expect(CartPage.cartTitle).toBeDisplayed();
        await expect(CartPage.cartItems).toBeElementsArrayOfSize({ gte: 2 });

        // Act - Remove todos os produtos
        await CartPage.removeAllProducts();

        // Assert
        await expect(CartPage.emptyCartMessage).toBeDisplayed();
        const message = await CartPage.emptyCartMessage.getText();
        expect(message).toContain('Cart is empty');
    });
});
