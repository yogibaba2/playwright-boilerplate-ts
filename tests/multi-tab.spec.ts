import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/bstack-demo/home-page';
import { SignInPage } from '../pages/bstack-demo/signin-page';
import { OrdersPage } from '../pages/bstack-demo/orders-page';


test.use({
    launchOptions: {
        slowMo: 1000
    }
})

test('multi tab handeling sample test', async ({page }) => {
    const context = await page.context();

    //Open signin in new page
    const homePage = new HomePage(page);
  
    await homePage.goto();

    const pagePromise = context.waitForEvent('page');
    
    // Ctrl + click on Windows and Linux
    // Meta + click on macOS
    await homePage.ordersLink.click({ modifiers: ['ControlOrMeta'] })
    
    // wait for event 
    const newPage = await pagePromise;
    const signInPage = new SignInPage(newPage);
 
    await signInPage.waitForPage();
    await signInPage.bringToFront();

    await signInPage.login("demouser", "testingisfun99")


    // await orderPage.waitForTimeout(10000)
    const orderPage = new OrdersPage(newPage);


    await expect(orderPage.noOrderHesding).toBeVisible();

    await expect(orderPage.noOrderHesding).toHaveText("No orders found")

    await orderPage.close();

    await page.bringToFront();

    await page.waitForTimeout(1000)

    console.log(await page.title());

      
});
