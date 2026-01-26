import { expect, test } from '../fixtures/custom-fixtures';

let selectedInfo: {
  rapText?: string;
  nameText?: string;
  lichText?: string;
} = {};

test.describe('Movie Detail Page', () => {


  test.beforeEach(async ({ homePage, authenticatedPage }) => {
    console.log('HomePage - Open Movie Detail page as authenticated user');

    await homePage.clickFirstBuyTicket();
  });



  test('Verify movie trailer plays when clicking Play button', async ({ detailPage }) => {
    console.log('Verify trailer can be played');

    await detailPage.clickPlay();
    await expect(detailPage.getifrVideo()).toBeVisible();
  });

  test('Verify cinema and showtime sections are displayed when clicking "Mua vé"', async ({ detailPage }) => {
    console.log('Verify cinema & showtime section');

    await detailPage.clickBuyticket();
    await expect(detailPage.getContainCumRap()).toBeVisible();
  });

  test('Verify user can select cinema and showtime for booking', async ({ detailPage, bookingPage }) => {
    console.log('Select cinema and showtime for booking');

    // Step 1: Click "Mua vé"
    await detailPage.clickBuyticket();

    // Step 2: Select first cinema (KHÔNG random)
    await detailPage.clickFirstRap();

    // Step 3: Select first showtime (KHÔNG random)
    selectedInfo = await detailPage.clickFirstLichChieu();

    // Guard chống undefined
    expect(selectedInfo.nameText).toBeTruthy();
    expect(selectedInfo.rapText).toBeTruthy();
    expect(selectedInfo.lichText).toBeTruthy();

    // Step 4: Verify booking page
    await bookingPage.verifyBooking();

    const bookingInfo = await bookingPage.getBookingInfo();

    await expect(bookingInfo.name).toContain(selectedInfo.nameText!);
    await expect(bookingInfo.cinema).toContain(selectedInfo.rapText!);
    await expect(bookingInfo.time).toContain(selectedInfo.lichText!);
  });

  test.afterEach(async () => {
    console.log(`Test finished at: ${new Date().toLocaleString()}`);
  });

});