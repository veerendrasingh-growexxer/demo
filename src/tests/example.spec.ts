import { test } from '../fixture/PageFixtures';
import { expect } from '@playwright/test';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

test.beforeEach(async ({ login }) => {
  // const login = new Login(page);
  await login.getLogin();
});

test('Get shopping card', async ({ dashboard }) => {
 
// const dashboard = new Dashboard(page);
  await dashboard.addToCart();
  
  // Assert that cart has 1 item
  const cartCount = await dashboard.getCartCount();
  expect(cartCount).toBe(1);

  // Remove item from cart
  await dashboard.removeFromCart();
  
  // Assert that cart is empty after removal
  const cartCountAfterRemoval = await dashboard.getCartCount();
  expect(cartCountAfterRemoval).toBe(0);
});
