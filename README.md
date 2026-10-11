# BVP Trading & Manufacturing Co., Ltd (Beyond Value Products)

Website doanh nghiệp chính thức cho **CÔNG TY TNHH THƯƠNG MẠI & SẢN XUẤT BVP**.  
Dự án được xây dựng trên nền tảng **React + TypeScript + Vite + Tailwind CSS**.

---

## 🌐 Xem trực tiếp Online (Không cần cài đặt)
Website hiện đang được triển khai trực tiếp tại:
👉 **[Xem Website BVP Trực Tiếp](https://ais-pre-gm2clr7luz3fl4ga7auzby-145308280619.asia-east1.run.app)**

---

## ❓ Tại sao nhấp đúp file `index.html` trong máy tính lại không chạy?
Đây là ứng dụng web hiện đại (SPA) viết bằng **React và TypeScript**, sử dụng các tệp mã nguồn `.tsx`.  
Trình duyệt web thông thường (Chrome, Edge, Safari...) khi mở trực tiếp file `index.html` qua đường dẫn `file:///...` sẽ **chặn** các module TypeScript do chính sách bảo mật CORS của trình duyệt.

Để chạy website này trên máy tính của bạn, chỉ cần làm theo **3 bước đơn giản** dưới đây:

---

## 🚀 Hướng dẫn chạy website trên máy tính (Localhost)

### Yêu cầu trước khi chạy:
- Cài đặt **Node.js** phiên bản 18 trở lên (Tải miễn phí tại: [https://nodejs.org/](https://nodejs.org/), khuyến nghị chọn bản **LTS**).

### Bước 1: Mở thư mục dự án trong Terminal
- Giải nén tệp tin dự án nếu đang ở dạng `.zip`.
- Mở **Terminal** (trên macOS/Linux) hoặc **Command Prompt / PowerShell** (trên Windows).
- Di chuyển vào thư mục dự án (hoặc mở thư mục này bằng **VS Code** rồi nhấn tổ hợp phím ``Ctrl + ` `` để mở terminal tích hợp).

### Bước 2: Cài đặt các thư viện cần thiết
Gõ lệnh sau vào Terminal và nhấn Enter:
```bash
npm install
```
*(Lệnh này chỉ cần chạy 1 lần đầu tiên để tải các gói thư viện React, Lucide, Tailwind về máy)*

### Bước 3: Khởi động website
Gõ lệnh sau và nhấn Enter:
```bash
npm run dev
```

Sau khi chạy, Terminal sẽ hiển thị đường dẫn:
```text
  VITE v8.x.x  ready in 200 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```
👉 Bạn giữ phím `Ctrl` (hoặc `Cmd` trên Mac) và nhấp chuột vào link **`http://localhost:3000`** để mở website trên trình duyệt!

---

## 📦 Cách xuất ra file HTML/CSS thuần để đưa lên Hosting thông thường
Nếu bạn muốn đóng gói toàn bộ website thành các file HTML, CSS, JavaScript thuần túy để tải lên bất kỳ nhà cung cấp Hosting nào (cPanel, Hostinger, GitHub Pages, Netlify, Vercel...):

1. Trong Terminal, gõ lệnh:
   ```bash
   npm run build
   ```
2. Thư mục mới tên là **`dist/`** sẽ được tạo ra.
3. Toàn bộ nội dung bên trong thư mục `dist/` chính là website hoàn chỉnh đã được biên dịch sẵn. Bạn có thể copy toàn bộ thư mục `dist/` này lên hosting của bạn là website sẽ hoạt động ngay lập tức!

---

## 📋 Cấu trúc thư mục dự án
```text
├── index.html                 # Điểm khởi đầu của ứng dụng
├── src/
│   ├── App.tsx                # Trang chủ tích hợp tất cả các thành phần
│   ├── main.tsx               # Khởi tạo React DOM
│   ├── types.ts               # Định nghĩa kiểu dữ liệu TypeScript
│   ├── translations.ts        # Toàn bộ nội dung song ngữ (VI / EN)
│   ├── components/
│   │   ├── BVPLogo.tsx        # Huy hiệu & Logo vector BVP chuẩn mạ vàng
│   │   ├── Header.tsx         # Thanh điều hướng, chuyển đổi song ngữ VI/EN
│   │   ├── Hero.tsx           # Banner chính với khẩu hiệu Beyond Value Products
│   │   ├── AboutSection.tsx   # Lời ngỏ từ BVP & năng lực xưởng may
│   │   ├── BusinessAreas.tsx  # 4 lĩnh vực sản xuất cốt lõi
│   │   ├── VisionMission.tsx  # Tầm nhìn, Sứ mệnh & 4 Giá trị cốt lõi
│   │   ├── OrderProcess.tsx   # Quy trình 7 bước đặt hàng chuyên nghiệp
│   │   ├── ProductsShowcase.tsx # Bộ sưu tập sản phẩm và modal thông số
│   │   ├── ClientsSection.tsx # Đối tác tiêu biểu (Unilever, Masan, Logitech...)
│   │   ├── ContactSection.tsx # Biểu mẫu liên hệ, hotline, FAQ
│   │   ├── Footer.tsx         # Chân trang thông tin pháp lý công ty BVP
│   │   └── SampleModal.tsx    # Modal đăng ký nhận bộ mẫu vải thực tế
│   └── data/
│       └── productsData.ts    # Dữ liệu sản phẩm mẫu phong phú
├── package.json               # Cấu hình dự án và dependencies
└── vite.config.ts             # Cấu hình Vite & Tailwind CSS
```
