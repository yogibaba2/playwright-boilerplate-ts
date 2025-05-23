import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class OrdersPage extends BasePage {
  public noOrderHesding: Locator;

  constructor(page: Page) {
    super(page)
    this.noOrderHesding = page.locator('.orders-listing h2');
  }

  async goto() {
    await this.page.goto('https://www.bstackdemo.com/signin');
  }

} 