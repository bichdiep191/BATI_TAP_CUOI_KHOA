import { expect, test } from '../fixtures/custom-fixtures';

test.describe('Home Page - Logged-in User', () => {

    test.beforeEach(async ({homePage,authenticatedPage}) => {
        console.log('Home Page')
        
    })

    test('Verify navigate to "Lịch chiếu" page when clicking "Lịch chiếu" ', async ({ homePage, page }) => {
        console.log('Click menu "Lịch chiếu"');
        await homePage.topBarNagivation.clickMenu('Lịch Chiếu'); 
        await expect(homePage.getContainLichChieu()).toBeInViewport();
    })

    test('Verify navigate to "Cụm Rạp" page when clicking "Cụm Rạp" ', async ({ homePage, page }) => {
        console.log('Click menu "Cụm Rạp"');
        await homePage.topBarNagivation.clickMenu('Cụm Rạp'); 
        await expect(homePage.getContainCumRap()).toBeInViewport();
    })

    test('Verify navigate to "Tin tức" page when clicking "Tin tức"', async ({ homePage, page }) => {
        console.log('Click menu "Tin Tức"');
        await homePage.topBarNagivation.clickMenu('Tin Tức'); 
        await expect(homePage.getContainTinTuc()).toBeInViewport();
    })

    test('Verify navigate to "Ứng dụng" page when clicking "Ứng Dụng"', async ({ homePage, page }) => {
        console.log('Click menu "Ứng Dụng"');
        await homePage.topBarNagivation.clickMenu('Ứng Dụng'); 
        await expect(homePage.getContainUngDung()).toBeInViewport();
    })
    test('Verify movie trailer plays when clicking on video', async ({ homePage }) => {
        console.log('Click movie trailer');
        await homePage.playMovieTrailer(); 
        await expect(homePage.getifrVideo()).toBeVisible();
    })

    test('Verify Click Mua Vé Ngay', async ({ homePage, bookingPage }) => {
        console.log('Click "Mua vé ngay" button');
        await homePage.clickBuyTicket(); 
        await expect(homePage.getlblMsgFilm()).toBeVisible();
        await homePage.clickDaHieu();
        const Infofim = await homePage.selectdropdownRandomPhim();
        await homePage.clickBuyTicket();
        await expect(homePage.getlblMsgCinema()).toBeVisible();
        await homePage.clickDaHieu();
        const InfoRap = await homePage.selectdropdownRandomRap();
        await homePage.clickBuyTicket();
        await expect(homePage.getlblMsgDate()).toBeVisible();
        await homePage.clickDaHieu();
        const InfoLichchieu = await homePage.selectdropdownRandomNgay();
        await homePage.clickBuyTicket();
        await bookingPage.verifyBooking();
        const bookingInfo = await bookingPage.getBookingInfo();
        await expect(bookingInfo.name).toContain(Infofim.randomText);
        await expect(bookingInfo.cinema).toContain(InfoRap.randomText);
    })

    test('Verify Click Mua Vé', async ({ homePage, detailPage }) => {
        console.log('Click "Mua Vé" button');
        await homePage.playTrailer(); 
        await homePage.clickBuy(); 
        await detailPage.verifyContainCumRapVisible();
    })

    test('Verify Chọn phim đặt vé', async ({ homePage, loginPage, bookingPage, page }) => {
        console.log('Click" Chọn phim đặt vé" button');
        await loginPage.clickDong_Thanhcong();
        await page.waitForTimeout(2000);
        await homePage.topBarNagivation.clickMenu('Cụm Rạp'); 
        await homePage.clickRandomRap(); 
        await page.waitForTimeout(2000);
        await homePage.clickRandomChiTietRap(); 
        await homePage.playTrailer();
        await bookingPage.verifyBooking();
    })

    test.afterEach(async ({ page }) => {
       console.log(`Test finished at: ${new Date().toLocaleString()}`);
    })
})