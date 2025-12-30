import { expect, test } from '../fixtures/custom-fixtures';

test.describe('Login Feature Tests', () => {

    test.beforeEach(async ({ homePage }) => {
       // console.log('Trang chủ - Click nút Đăng nhập')
        //Step 1: Navigate to https://demo1.cybersoft.edu.vn/
        await homePage.navigateTo('https://demo1.cybersoft.edu.vn/'); 
        //Step 2: Click button 'Dang nhap' 
        await homePage.topBarNagivation.navigateLoginPage(); 
    })

    test('Verify login successfully with valid credentials', async ({ homePage, loginPage }) => {
        console.log('Đăng nhập thành công với tài khoản hợp lệ');
        await loginPage.login('depnt1', '12345678');
        await expect(loginPage.getLblLoginMsgLocator()).toBeVisible(); 
    })

    test('Verify login failed with invalid password', async ({ loginPage }) => {
        console.log('Nhập sai mật khẩu');
        await loginPage.login('depnt1', '1234@5678');
        await expect(loginPage.getlblMsgInvalid()).toBeVisible(); 
    })

    test('Verify login failed with non-existent account', async ({ loginPage }) => {
        console.log('Tài khoản không tồn tại');
        await loginPage.login('depnt2', '12345678');
        await expect(loginPage.getlblMsgInvalid()).toBeVisible();
    })

    test('Verify login failed with empty account and password', async ({ loginPage }) => {
        console.log('Nhấn nút Đăng nhập khi chưa nhập thông tin');
        await loginPage.login('', '');
        await expect(loginPage.gettxterrorAccount()).toBeVisible();
        await expect(loginPage.gettxterrorPassword()).toBeVisible();
    })

    test('Verify login link is displayed on login page', async ({ loginPage, registerPage }) => {
        console.log('Click link "Bạn chưa có tài khoản? Đăng ký"'); 
        await loginPage.clickregist();
        await registerPage.verifyPopupRegisterVisible();
    })

     test.afterEach(async ({ page }) => {
       console.log(`Test finished at: ${new Date().toLocaleString()}`);
    })
})