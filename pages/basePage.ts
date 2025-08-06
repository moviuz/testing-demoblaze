import {Page, expect} from '@playwright/test';

export class BasePage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async loadWebsite(url:string){
        await this.page.goto(url);
    }

    async fillField(selector: string, value: string) {
        await this.page.locator(selector).fill(value);
    }

    async expectVisible(selector: string, option: string){
        await expect(this.page.locator(selector)).toBeVisible();
    }

}