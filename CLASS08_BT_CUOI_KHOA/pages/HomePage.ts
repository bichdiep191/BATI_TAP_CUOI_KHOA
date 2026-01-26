import { Page, Locator, expect } from '@playwright/test';
import { CommonPage } from './CommonPage';

export class HomePage extends CommonPage {


  private readonly btnPlayTrailer: Locator;
  private readonly iframeVideo: Locator;

  private readonly sectionLichChieu: Locator;
  private readonly sectionCumRap: Locator;
  private readonly sectionTinTuc: Locator;
  private readonly sectionUngDung: Locator;

  private readonly btnDaHieu: Locator;
  private readonly btnDangXuat: Locator;
  private readonly btnXacNhanDangXuat: Locator;
  private readonly btnHuyDangXuat: Locator;
  private readonly lblDaDangXuat: Locator;

  private readonly btnFirstBuyTicket: Locator;

  constructor(page: Page) {
    super(page);

    // ===== Video / Trailer =====
    this.btnPlayTrailer = page.getByRole('button', { name: 'video-button' });
    this.iframeVideo = page.locator('iframe').contentFrame().locator('video');

    // ===== Sections =====
    this.sectionLichChieu = page.locator('#lichChieu');
    this.sectionCumRap = page.locator('#cumRap');
    this.sectionTinTuc = page.locator('#tinTuc');
    this.sectionUngDung = page.locator('#ungDung');

    // ===== Common buttons =====
    this.btnDaHieu = page.getByRole('button', { name: 'Đã hiểu' });
    this.btnDangXuat = page.getByRole('link', { name: 'Đăng xuất' });
    this.btnXacNhanDangXuat = page.getByRole('button', { name: 'Đồng ý' });
    this.btnHuyDangXuat = page.getByRole('button', { name: 'Hủy' });
    this.lblDaDangXuat = page.getByRole('heading', { name: 'Đã đăng xuất' });

    this.btnFirstBuyTicket = page
      .getByRole('link', { name: 'MUA VÉ' })
      .first();
  }

  async clickFirstBuyTicket(): Promise<void> {
    await expect(this.btnFirstBuyTicket).toBeVisible({ timeout: 15000 });
    await this.btnFirstBuyTicket.click();
  }

  async playFirstMovieTrailer(): Promise<void> {
    await this.clickFirstBuyTicket();
    await expect(this.btnPlayTrailer).toBeVisible();
    await this.btnPlayTrailer.click();
  }

 
  async logout(): Promise<void> {
    await this.btnDangXuat.click();
    await this.btnXacNhanDangXuat.click();
    await expect(this.lblDaDangXuat).toBeVisible();
  }
  getIframeVideo(): Locator {
    return this.iframeVideo;
  }

  getSectionLichChieu(): Locator {
    return this.sectionLichChieu;
  }

  getSectionCumRap(): Locator {
    return this.sectionCumRap;
  }

  getSectionTinTuc(): Locator {
    return this.sectionTinTuc;
  }

  getSectionUngDung(): Locator {
    return this.sectionUngDung;
  }

  getLogoutMessage(): Locator {
    return this.lblDaDangXuat;
  }
}
