// Filename: pages/HomePage.ts

import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForPage(){
    await this.page.waitForLoadState();
  }

  async bringToFront(){
    await this.page.bringToFront();
  }

  async close(){
    await this.page.close();
  }

}
