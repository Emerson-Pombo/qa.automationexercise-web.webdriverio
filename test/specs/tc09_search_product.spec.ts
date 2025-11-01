import { expect } from '@wdio/globals';
import HomePage from '../../src/pages/home.page';
import ProductsPage from '../../src/pages/products.page';

describe('TC09 - Search Product', () => {
    it('should search for a product and display results correctly', async () => {
        // Arrange
        const productName = 'Dress';

        // Act
        await HomePage.open('/');
        await HomePage.click(HomePage.productsBtn);
        await ProductsPage.type(ProductsPage.searchInput, productName);
        await ProductsPage.click(ProductsPage.searchBtn);

        // Assert
        await expect(ProductsPage.searchedProductsTitle).toBeDisplayed();
        const products = await ProductsPage.searchResults;
        for (const product of await products) {
            await expect(product).toBeDisplayed();
        }
    });
});
