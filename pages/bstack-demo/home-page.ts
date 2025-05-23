// Filename: pages/HomePage.ts

import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class HomePage extends BasePage {
  private productList: Locator;
  private filterDropdown: Locator;
  private addToCartButtons: Locator;
  private cartIcon: Locator;
  public signInLink: Locator;
  public ordersLink: Locator;
  public favouriteLink: Locator;

  constructor(page: Page) {
    super(page)
    this.productList = page.locator('.shelf-item');
    this.filterDropdown = page.locator('.sort select');
    this.addToCartButtons = page.locator('.shelf-item .shelf-item__buy-btn');
    this.cartIcon = page.locator('.float-cart__close-btn');
    this.signInLink = page.locator('a[href="/signin"]');
    this.ordersLink = page.getByRole('link', { name: 'Orders' });
    this.favouriteLink = page.getByRole('link', { name: 'Favourites' });
  }

  async goto() {
    await this.page.goto('https://www.bstackdemo.com/');
  }

  async getProductCount(): Promise<number> {
    return await this.productList.count();
  }

  async filterBy(optionText: string) {
    await this.filterDropdown.selectOption({ label: optionText });
  }

  async addFirstProductToCart() {
    await this.addToCartButtons.first().click();
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async navigateToSignIn() {
    await this.signInLink.click();
  }
}
