import { browser, expect } from '@wdio/globals';

describe('Smoke test', () => {
    it('should open the homepage', async () => {
        // Act
        await browser.url('/');
        // Assert
        await expect(browser).toHaveUrl(expect.stringContaining('automationexercise.com'))
    });
});
