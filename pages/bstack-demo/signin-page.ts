import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class SignInPage extends BasePage {
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private errorMessage: Locator;

  constructor(page: Page) {
    super(page)
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-btn');
    this.errorMessage = page.locator('.api-error');
  }

  async goto() {
    await this.page.goto('https://www.bstackdemo.com/signin');
  }

  
  async login(username: string, password: string) {
    await this.usernameInput.click();
    await this.page.getByText('demouser', { exact: true }).click();
    await this.passwordInput.click();
    await this.page.getByText('testingisfun99', { exact: true }).click();
    await this.loginButton.click();
  }

  async getErrorMessage(): Promise<string | null> {
    return await this.errorMessage.textContent();
  }
} 