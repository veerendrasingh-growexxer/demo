import {Page} from '@playwright/test'

export default class Dashboard {
    constructor(private readonly page: Page){}

    async addToCart() {
        await this.page.locator(`[data-test="add-to-cart-sauce-labs-backpack"]`).click();
    }

    async goToCart() {
        await this.page.locator('[data-test="shopping-cart-link"]').click();
    }

    async getCartCount() {
        const cartBadge = this.page.locator('[data-test="shopping-cart-badge"]');
        if (await cartBadge.isVisible()) {
            return parseInt(await cartBadge.textContent() || '0');
        }
        return 0;
    }

    async isRemoveButtonVisible() {
        return await this.page.locator("//button[text()='REMOVE']").isVisible();
    }

    async removeFromCart() {
        await this.page.locator("//button[text()='REMOVE']").click();
    }
}
