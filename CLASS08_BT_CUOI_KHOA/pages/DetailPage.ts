import { expect, Locator, Page } from '@playwright/test';
import { CommonPage } from './CommonPage';

export class DetailPage extends CommonPage {


  private readonly ContainCumRap = this.page.locator('#cinemaList');
  private readonly btnPlay = this.page.getByRole('button', { name: 'video-button' });
  private readonly ifrVideo = this.page.locator('iframe').contentFrame().locator('video');
  private readonly btnBuyticket = this.page.getByText('Mua vé');

  constructor(page: Page) {
    super(page);
  }


  async clickPlay() {
    await this.click(this.btnPlay);
  }

  async clickBuyticket() {
    await this.click(this.btnBuyticket);
  }

  getContainCumRap(): Locator {
    return this.ContainCumRap;
  }

  async verifyContainCumRapVisible() {
    await expect(this.ContainCumRap).toBeVisible({ timeout: 15000 });
  }

  getifrVideo(): Locator {
    return this.ifrVideo;
  }


 
  async clickFirstRap() {
    const rapButtons = this.page.locator(
      'div.MuiTabs-root.MuiTabs-vertical button'
    );

    const count = await rapButtons.count();
    if (count === 0) {
      throw new Error('Không tìm thấy cụm rạp nào');
    }

    await rapButtons.first().waitFor({ state: 'visible', timeout: 15000 });
    await rapButtons.first().click();
  }

  
  async clickFirstLichChieu() {
    // ===== Lấy tên phim =====
    const nameFilmLocator = this.page.locator(
      'div[class*="MuiGrid-root"] h1'
    );
    const nameText = (await nameFilmLocator.first().textContent())?.trim();

    // ===== Lấy tên rạp (tab đang active) =====
    const rapActive = this.page.locator(
      'div.MuiTabs-root.MuiTabs-vertical button[aria-selected="true"]'
    );
    const rapText = (await rapActive.textContent())?.trim();

    // ===== Lấy lịch chiếu =====
    const lichChieuLinks = this.page.locator(
      'a[href*="/purchase"]'
    );

    const count = await lichChieuLinks.count();
    console.log('Số lịch chiếu tìm được:', count);

    if (count === 0) {
      throw new Error('Không tìm thấy lịch chiếu nào');
    }

    const firstLich = lichChieuLinks.first();
    const lichText = (await firstLich.textContent())?.trim();

    await firstLich.scrollIntoViewIfNeeded();
    await firstLich.click();

    return {
      rapText,
      nameText,
      lichText
    };
  }
}
