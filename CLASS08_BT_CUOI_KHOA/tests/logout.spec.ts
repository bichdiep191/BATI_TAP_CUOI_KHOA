import { expect, test } from '../fixtures/custom-fixtures';

test.describe('Logout Feature Tests', () => {

    test.beforeEach(async ({ homePage, authenticatedPage }) => {
        console.log('Trang chủ - Click nút Đăng xuất')
    })

    test('Verify logout successfully', async ({ homePage }) => {
        console.log('Đăng xuất thành công');
        await homePage.clickDangXuat();
        await homePage.clickYesDangXuat(); 
        await expect(homePage.getLblLogoutMsgLocator()).toBeVisible();
    })

    test('Verify logout is cancelled', async ({ homePage, loginPage }) => {
        console.log('Hủy đăng xuất');
        await homePage.clickDangXuat(); 
        await homePage.clickNoDangXuat();
        await expect(homePage.topBarNagivation.getUserProfileLocator('DIEP')).toBeVisible();
    })

     test.afterEach(async ({ page }) => {
       console.log(`Test finished at: ${new Date().toLocaleString()}`);
    })
})