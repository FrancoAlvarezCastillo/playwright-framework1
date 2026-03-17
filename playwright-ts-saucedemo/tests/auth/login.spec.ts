import { test, expect } from '../../fixtures/test-fixtures';
import { users } from '../../data/users';

test.describe('Authentication', () => {
  test('successful login with a standard user', async ({ page, loginPage, inventoryPage }) => {
    await loginPage.goto();
    await loginPage.assertLoaded();

    await loginPage.login(users.standard.username, users.standard.password);

    await inventoryPage.assertLoaded();
    await expect(page).toHaveURL(/inventory/);
  });

  test('locked out user cannot log in', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(users.locked.username, users.locked.password);

    await loginPage.assertErrorContains('Sorry, this user has been locked out.');
  });
});
