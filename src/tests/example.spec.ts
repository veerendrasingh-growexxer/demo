import { test } from '../fixture/PageFixtures';
import { expect } from '@playwright/test';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

test.beforeEach(async ({ login }) => {
  // const login = new Login(page);
  await login.getLogin();
});

test('Get shopping card', async ({ dashboard }) => {
 
//const dashboard = new Dashboard(page);
await dashboard.addToCart();
//dashbord page


  //card page
  await dashboard.page.locator("//button[text()='REMOVE']").click();
});