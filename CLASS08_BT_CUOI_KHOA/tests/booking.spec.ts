import { expect, test } from '../fixtures/custom-fixtures';

// let selectedInfo: { rapText: string | undefined; nameText: string | undefined; lichText: string | undefined };
let selectedInfo: {
  rapText?: string;
  nameText?: string;
  lichText?: string;
} = {};
test.describe('Verify booking functionality', () => {

    test.beforeEach(async ({ detailPage, homePage }) => {
  await homePage.clickFirstBuyTicket();
 // await homePage.clickBuy();
  await detailPage.clickBuyticket();
  await detailPage.clickFirstRap();
  expect(selectedInfo.lichText).toBeTruthy();
});

    test('Verify seat selection warning is displayed when booking without seats', async ({ bookingPage }) => {
        console.log('Click "Đặt vé" without selecting seats');
        await bookingPage.clickBooking();
        await expect(bookingPage.getlblChuaChonGheMsg()).toBeInViewport();
    })

    test('Verify booking succeeds when selecting one seat', async ({ bookingPage }) => {
        console.log('Select one available seat and complete booking');
        const { seatText } = await bookingPage.selectFirstAvailableSeat();
        console.log(`Selected seat: ${seatText}`);
        await bookingPage.clickBooking(); 
        await expect(bookingPage.getlblthanhcongMsg()).toBeInViewport();
    })

    test('Verify booking succeeds when selecting multiple seats', async ({ bookingPage }) => {
        console.log('Select multiple seats and complete booking');
        const selectedSeats = await bookingPage.selectRandomSeats(1,3);
        console.log(`Selected seats: ${selectedSeats.join(', ')}`);
       // verify ghế hiển thị trong thông tin thanh toán
        const bookingInfo = await bookingPage.getBookingInfo();
        for (const seat of selectedSeats) {
            await expect(bookingInfo.seat).toContain(seat);
        }
        await bookingPage.clickBooking(); // Step 8: Click Đặt vé
        //VP: 'Đặt vé thành công' message display
        await expect(bookingPage.getlblthanhcongMsg()).toBeVisible();
       

    })

     test.afterEach(async ({ page }) => {
       console.log(`Test finished at: ${new Date().toLocaleString()}`);
    })


})