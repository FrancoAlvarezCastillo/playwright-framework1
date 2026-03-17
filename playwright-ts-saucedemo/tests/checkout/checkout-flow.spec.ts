import { test } from '../../fixtures/test-fixtures';
import { checkoutData } from '../../data/checkout-data';
import { users } from '../../data/users';
import type { Pages } from '../../fixtures/test-fixtures';

const productName = 'Sauce Labs Backpack';

test.describe('Checkout flow', () => {
  test('user can buy one product successfully', async ({
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage
  }: Pages) => {
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);

    await inventoryPage.assertLoaded();
    await inventoryPage.addProductToCart(productName);
    await inventoryPage.assertCartCount(1);
    await inventoryPage.openCart();

    await cartPage.assertLoaded();
    await cartPage.assertProductVisible(productName);
    await cartPage.proceedToCheckout();

    await checkoutPage.assertInformationStepLoaded();
    await checkoutPage.fillCustomerInformation(
      checkoutData.validCustomer.firstName,
      checkoutData.validCustomer.lastName,
      checkoutData.validCustomer.postalCode
    );
    await checkoutPage.continueCheckout();

    await checkoutPage.assertOverviewStepLoaded();
    await checkoutPage.finishCheckout();
    await checkoutPage.assertOrderCompleted();
  });
});
