import { test as base } from '@playwright/test';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

interface PageFixtures {
  login: Login; 
  dashboard: Dashboard;
  
}
export const test = base.extend<PageFixtures>({
  login: async ({ page }, use) => {
    const login = new Login(page);
    await use(login);
  },
  dashboard: async ({ page }, use) => {
    const dashboard = new Dashboard(page);
    await use(dashboard);
  },
});