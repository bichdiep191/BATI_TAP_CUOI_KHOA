import { expect, test } from '../fixtures/custom-fixtures';
let selectedInfo: { rapText: string | undefined; nameText: string | undefined; lichText: string | undefined };
test.describe('Movie Detail Page', () => {

    test.beforeEach(async ({ homePage, authenticatedPage }) => {
        console.log('HomePage - Open Movie Detail page as authenticated user')
        await homePage.playTrailer(); 
        await homePage.clickBuy(); 

    })

    test('Verify movie trailer plays when clicking Play button', async ({ detailPage }) => {
        console.log('Click Play button');
        await detailPage.hoverMovie();
        await detailPage.clickPlay(); 
        await expect(detailPage.getifrVideo()).toBeVisible();
    })

    test('Verify cinema and showtime sections are displayed when clicking "Mua vé"', async ({ detailPage }) => {
        console.log('Click "Mua vé" button');
        await detailPage.clickBuyticket(); 
        await expect(detailPage.getContainCumRap()).toBeInViewport();
    })

    test('Verify user can select cinema and showtime for booking', async ({ detailPage, bookingPage, page }) => {
        console.log('Select cinema and showtime for booking');
        await detailPage.clickBuyticket(); 
        //await page.waitForTimeout(1000);
        await detailPage.clickRandomRap();
       // await page.waitForTimeout(2000);
        selectedInfo = await detailPage.clickRandomLichchieu(); 
        await bookingPage.verifyBooking();
        const bookingInfo = await bookingPage.getBookingInfo();
        await expect(bookingInfo.name).toContain(selectedInfo.nameText);
        await expect(bookingInfo.cinema).toContain(selectedInfo.rapText);
        await expect(bookingInfo.time).toContain(selectedInfo.lichText);
    })
    
    test.afterEach(async ({ page }) => {
      console.log(`Test finished at: ${new Date().toLocaleString()}`);
    })

})