import { expect } from '@wdio/globals';
import HomePage from '../../src/pages/home.page';
import ProductsPage from '../../src/pages/products.page';
import CartPage from '../../src/pages/cart.page';

describe('TC17 - Remove Products From Cart', () => {
    it('should remove a product from the cart successfully', async () => {
        // Act
        await HomePage.open('/');
        await HomePage.click(HomePage.productsBtn);

        await ProductsPage.addProductToCartById(1);
        await ProductsPage.clickContinueShopping();
        await ProductsPage.addProductToCartById(2);
        await ProductsPage.viewCartBtn.click();

        await expect(CartPage.cartTitle).toBeDisplayed();
        await expect(CartPage.cartItems).toBeElementsArrayOfSize({ gte: 2 });

        await CartPage.removeProductById(1);

        const itemsAfterRemove = await CartPage.cartItems;
        expect(itemsAfterRemove.length).toBe(1);

        const remainingName = await CartPage.getProductName(1);
        expect(remainingName).toBe('Men Tshirt');
    });
});
