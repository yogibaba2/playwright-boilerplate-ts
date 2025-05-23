
import { test as base } from '@playwright/test';
import { SignInPage } from '../pages/bstack-demo/signin-page';
import { HomePage } from '../pages/bstack-demo/home-page';



// Declare the types of your fixtures.
type MyFixtures = {
    signInPage: SignInPage;
    homePage: HomePage
  };
  

// Extend basic test by providing a "MyFixture" fixture.
export const test = base.extend<MyFixtures>({
    signInPage: async ({ page }, use) => {
    const signInPage = new SignInPage(page);
    await signInPage.goto();
    await signInPage.login("demouser", "testingisfun99");
    await use(signInPage);
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

export { expect } from '@playwright/test';