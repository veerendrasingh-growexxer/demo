import {Page} from '@playwright/test'

export default class Dashboard {
    constructor(private readonly page: Page){}

    async addToCart() {
        await this.page.locator(`[data-test="add-to-cart-sauce-labs-backpack"]`).click();
    }

    async goToCart() {
        await this.page.locator('[data-test="shopping-cart-link"]').click();
    }
}