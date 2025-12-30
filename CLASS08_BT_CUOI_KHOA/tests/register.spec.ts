import { expect, test } from '../fixtures/custom-fixtures';
import { generateAccount } from '../pages/utils';



test.describe('Register Test Future', () => {

    test.beforeEach(async ({ homePage }) => {
        console.log('Trang chủ')
         //Step 1: Navigate to https://demo1.cybersoft.edu.vn/
        await homePage.navigateTo('https://demo1.cybersoft.edu.vn/');

        //Step 2: Click button 'Đăng ký'
        await homePage.topBarNagivation.navigateRegisterPage(); 
    })

    test('Verify successful registration', async ({ registerPage }) => {
        console.log('Dữ liệu hợp lệ, đăng ký thành công ');
        const account = generateAccount();
        const email = `${account}@gmail.com`;
        await registerPage.register(account, '12345678', '12345678', 'DIEPNT', email);
        await expect(registerPage.getlblRegisterMsg()).toBeVisible(); 
    })

    test('Registration fails with existing account', async ({ registerPage }) => {
        console.log('Tài khoản đã tồn tại');
        const account = 'depnt1';
        const email = `${account}@gmail.com`;
        await registerPage.register(account, '12345678', '12345678', 'depnt', email);
        await expect(registerPage.getlblMsgInvalidAccount()).toBeVisible(); 
    })
     test('Verify full name does not accept numeric characters', async ({ registerPage }) => {
        console.log('Họ Tên nhập số');
        const account = generateAccount();;
        const email = `${account}@gmail.com`;
        await registerPage.register(account, '12345678', '12345678', '1111', email);
        await expect(registerPage.getlblMsgInvalidName()).toBeVisible(); 
    })

    test('Verify Register with Incorrect confirm password', async ({ registerPage }) => {
        console.log('Mật khẩu không khớp');
        const account = generateAccount();
        const email = `${account}@gmail.com`;
        await registerPage.register(account, 'depnt@1234', 'depnt1234', 'DIEP', email);
        await expect(registerPage.getlblMsgIncorrtRePass()).toBeVisible();
    })

    test('Verify registration with empty account', async ({ registerPage }) => {
        console.log('Thiếu thông tin bắt buộc: Tài khoản');
        const account = generateAccount();
        const email = `${account}@gmail.com`;
        await registerPage.register('', 'depnt@1234', 'depnt@1234', 'DIEP', email);
        await expect(registerPage.getlblMsgEmptyAccount()).toBeVisible();
    })

    test('Verify registration with empty password', async ({ registerPage }) => {
        console.log('Thiếu thông tin bắt buộc: Mật khẩu');
        const account = generateAccount();
        const email = `${account}@gmail.com`;
        await registerPage.register(account, '', 'depnt@1234', 'depnt', email);
        await expect(registerPage.getlblMsgEmptyPassword()).toBeVisible();
    })

    
    test('Verify registration with empty confirm password', async ({ registerPage }) => {
        console.log('Thiếu thông tin bắt buộc: Nhập lại mật khẩu');
        const account = generateAccount();
        const email = `${account}@gmail.com`;
        await registerPage.register(account, 'depnt@1234', '', 'depnt', email);
        await expect(registerPage.getlblMsgEmptyConfirmPass()).toBeVisible(); 
    })

    test('Verify registration with empty name', async ({ registerPage }) => {
        console.log('Thiếu thông tin bắt buộc: Họ tên');
        const account = generateAccount();
        const email = `${account}@gmail.com`;
        await registerPage.register(account, 'depnt@1234', 'depnt@1234', '', email);
        await expect(registerPage.getlblMsgEmptyName()).toBeVisible();
    })

    test('Verify registration with empty email', async ({ registerPage }) => {
        console.log('Thiếu thông tin bắt buộc: Email');
        const account = generateAccount();
        const email = `${account}@gmail.com`;
        await registerPage.register(account, 'depnt@1234', 'depnt@1234', 'depnt', '');
        await expect(registerPage.getlblMsgEmptyEmail()).toBeVisible();
    })

    test('Verify registration with all fields empty', async ({ registerPage }) => {
        console.log('Nhấn Đăng ký mà không nhập thông tin nào');
        await registerPage.clickRegister();
        await registerPage.verifyFullEmty();
    })

    test('Verify Register with existing email', async ({ registerPage }) => {
        console.log('Email đã tồn tại');
        const account = generateAccount();
        const email = `${account}@gmail.com`;
        await registerPage.register(account, 'depnt@1234', 'depnt@1234', 'depnt', 'hanhtrinhmoi03@gmail.com');
        await expect(registerPage.getlblMsgInvalidEmail()).toBeVisible();
    })

    test('Verify login link on registration page', async ({ loginPage, registerPage }) => {
        console.log('Click link "Bạn đã có tài khoản? Đăng nhập"');
        await registerPage.clickLoginLink();
        await loginPage.verifyPopupLoginVisible();
    })

    test.afterEach(async ({ page }) => {
       console.log(`Test finished at: ${new Date().toLocaleString()}`);
    })
})