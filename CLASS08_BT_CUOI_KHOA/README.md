# 📌 Cybersoft Automation Testing Final Project – Playwright

## 1. Giới thiệu dự án

Đây là **dự án cuối khóa môn Automation Testing tại Cybersoft**, được xây dựng nhằm mục đích áp dụng các kiến thức đã học để **xây dựng một framework kiểm thử tự động Web UI hoàn chỉnh** bằng **Playwright** và **TypeScript**.

Dự án tập trung vào việc:

* Thiết kế framework theo mô hình **Page Object Model (POM)**
* Tự động hóa các chức năng quan trọng của website
* Áp dụng tư duy Automation Testing theo hướng dự án thực tế

**Website kiểm thử:**
🔗 [https://demo1.cybersoft.edu.vn/](https://demo1.cybersoft.edu.vn/)

---

## 2. Mục tiêu dự án

* Xây dựng framework Automation Testing từ đầu bằng Playwright
* Áp dụng Page Object Model để dễ bảo trì và mở rộng
* Viết test case và automation test cho các chức năng chính
* Thực hành kỹ năng tổ chức code, cấu trúc project và chạy test tự động
* Chuẩn bị nền tảng cho công việc Automation Tester sau khóa học

---

## 3. Công nghệ sử dụng

| Công nghệ              | Mô tả                          |
| ---------------------- | ------------------------------ |
| Playwright             | Framework kiểm thử tự động E2E |
| TypeScript             | Ngôn ngữ lập trình             |
| Node.js                | Môi trường chạy                |

---

## 4. Cấu trúc project

```
CLASS08_BT_CUOI_KHOA
│
├── .github/workflows/
│   └── playwright.yml
│
├── fixtures/
│   └── custom-fixtures.ts
│
├── pages/
│   ├── components/
│   │   └── TopBarNavigation.ts
│   ├── BasePage.ts
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── RegisterPage.ts
│   ├── BookingPage.ts
│   └── DetailPage.ts
│
├── tests/
│   ├── home.spec.ts
│   ├── login.spec.ts
│   ├── logout.spec.ts
│   ├── register.spec.ts
│   ├── booking.spec.ts
│   └── detail.spec.ts
│
├── utils/
│   └── utils.ts
│
├── playwright-report/
├── test-results/
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

## 5. Phạm vi kiểm thử (Test Coverage)

### Chức năng Đăng ký (Sign Up)

* Đăng ký tài khoản thành công
* Validate username, password, email
* Kiểm tra các trường hợp dữ liệu không hợp lệ
* Kiểm tra UI: show/hide password, tab order, reload trang

### Chức năng Đăng nhập / Đăng xuất (Login / Logout)

* Đăng nhập với tài khoản hợp lệ
* Kiểm tra đăng nhập sai
* Đăng xuất khỏi hệ thống

### Chức năng khác

* Điều hướng trang chủ
* Xem chi tiết phim
* Đặt vé (booking) – happy path

---

## 6. Cách chạy dự án

### Bước 1: Cài đặt thư viện

```bash
npm install
```

### Bước 2: Cài đặt browser cho Playwright

```bash
npx playwright install
```

### Bước 3: Chạy toàn bộ test

```bash
npx playwright test
```

### Bước 4: Chạy test với giao diện UI

```bash
npx playwright test --ui
```

### Bước 5: Xem báo cáo kết quả

```bash
npx playwright show-report
```

---

## 7. Điểm nổi bật của framework

* Áp dụng **Page Object Model**
* Tách biệt Page, Test và Data
* Sử dụng **Playwright Fixture** để tái sử dụng Page Object
* Component hóa các phần UI dùng chung
* Code rõ ràng, dễ đọc, dễ bảo trì
* Có thể mở rộng thêm test case dễ dàng

---

## 8. Hướng phát triển thêm

* Mở rộng thêm test case nâng cao
* Tích hợp API Testing
* Chạy automation trên CI/CD
* Tạo báo cáo nâng cao (Allure)
* Chạy đa trình duyệt

---

## 9. Thông tin học viên

* **Học viên:** *Nguyễn Thị Thu Tâm & Nguyễn Thị Diệp*
* **Khóa học:** Automation Testing – Cybersoft
* **Dự án:** Cybersoft Automation Testing Final Project – Playwright

---

## 10. Ghi chú

Dự án được thực hiện phục vụ cho mục đích học tập, giúp học viên:

* Hiểu cách xây dựng framework Automation Testing
* Áp dụng Playwright vào dự án thực tế
* Nâng cao tư duy kiểm thử tự động