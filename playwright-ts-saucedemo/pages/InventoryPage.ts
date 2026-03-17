import { expect, Locator, Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartBadge: Locator;
  readonly shoppingCartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  addToCartButton(productName: string): Locator {
    return this.page
      .locator('.inventory_item')
      .filter({ has: this.page.getByText(productName, { exact: true }) })
      .locator('button');
  }

  async assertLoaded() {
    await expect(this.title).toHaveText('Products');
  }

  async addProductToCart(productName: string) {
    await this.addToCartButton(productName).click();
  }

  async assertCartCount(count: number) {
    await expect(this.cartBadge).toHaveText(String(count));
  }

  async openCart() {
    await this.shoppingCartLink.click();
  }
}
