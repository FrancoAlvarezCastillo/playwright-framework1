import { expect, Locator, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly title: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  cartItem(productName: string): Locator {
    return this.page.locator('.cart_item').filter({
      has: this.page.getByText(productName, { exact: true })
    });
  }

  async assertLoaded() {
    await expect(this.title).toHaveText('Your Cart');
  }

  async assertProductVisible(productName: string) {
    await expect(this.cartItem(productName)).toBeVisible();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
