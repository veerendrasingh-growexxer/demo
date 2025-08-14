import {Page} from '@playwright/test'
import logger from '../utilty/loggerUtility';
import { log } from 'console';

export default class Login{
    constructor(private readonly page: Page){}


    async getUrl(){
        try {
        await this.page.goto("https://www.saucedemo.com/");
        logger.info("Navigated to the login page");
        }  catch (error) {
            logger.error("Failed to navigate to the login page: " + error);
        }
    }

    async userDetailsFillOut(){
       await this.page.locator('[data-test="username"]').click();
        await this.page.locator('[data-test="username"]').fill('standard_user');
        logger.info("Filled out the username field with 'standard_user'");
    }
    async passwordFillOut(){
        await this.page.locator('[data-test="password"]').click();
        await this.page.locator('[data-test="password"]').fill('secret_sauce');
    }
    async loginButtonClick(){
        await this.page.locator('[data-test="login-button"]').click();
    }   
//action to perform login
    async getLogin(){
        await this.getUrl();
        await this.userDetailsFillOut();
        await this.passwordFillOut();   
        await this.loginButtonClick();
    }
}