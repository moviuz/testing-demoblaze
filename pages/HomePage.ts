import  { BasePage } from './basePage';

export class HomePage extends BasePage {
    readonly categoryMenu = this.page.locator('#itemc');
    readonly productName = this.page.locator('#tbodyid h4')
    readonly navBarList = this.page.locator('.nav-item a');

    async clickCategory(category: string) {
        await this.categoryMenu.filter({ hasText: category }).click();
    }

    async getCategoryList() {
        return await this.categoryMenu.allInnerTexts();
    }

    async getProductNames() {
        await this.productName.last().waitFor({ state: 'visible' });
        return await this.productName.allInnerTexts();
    }
}
