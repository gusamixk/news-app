# 🌟 Jurnalight 🌟

![GitHub last commit](https://img.shields.io/github/last-commit/gusamixk/news-app)
![GitHub issues](https://img.shields.io/github/issues/gusamixk/news-app)
![GitHub stars](https://img.shields.io/github/stars/gusamixk/news-app?style=social)

** Web Blog Jurnalight** 
Jurnalight adalah platform blog berita online yang dirancang untuk menyajikan berita terkini dengan fitur eksklusif untuk pengguna yang terdaftar. Dengan Jurnalight, pengguna dapat menikmati berita terbaru, artikel mendalam, serta layanan premium yang memungkinkan pengguna mengunggah berita melalui admin. Platform ini memberikan akses mudah ke berita dengan antarmuka yang intuitif dan modern.
---

## 🚀 Fitur Utama

| Fitur                     | Deskripsi                                                                                 |
|---------------------------|-------------------------------------------------------------------------------------------|
| **OAuth**                 | Login/Register dengan Google untuk autentikasi mudah.                                    |
| **JWT (JSON Web Token)**  | Keamanan akses dengan token autentikasi.                                                 |
| **Payment Gateway**       | Sistem pembayaran premium melalui Midtrans Snap.                                         |
| **Authorization**         | Role-based access control (Admin & Member).                                              |
| **Admin Panel**           | CRUD berita, manajemen pengguna, dan verifikasi pembayaran.                              |
| **Beranda & Artikel**     | Halaman beranda dan artikel berita responsif dengan kategori terorganisir.                |

---

## 🎯 Target Pengguna

1. **Pengguna Biasa**: Membaca berita tanpa langganan.
2. **Pengguna Premium**: Akses penuh dan fitur unggah berita.
3. **Admin**: Mengelola Web, pengguna, dan transaksi.

---

## 🛠️ Teknologi yang Digunakan

- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend**: [Node.js](https://nodejs.org/), JWT
- **Database**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Payment Gateway**: [Midtrans Snap](https://midtrans.com/id/snap)

---

## ⚙️ Instalasi

### Prasyarat
Pastikan Anda telah menginstal perangkat berikut di sistem Anda:
- **Node.js**: Untuk menjalankan server dan aplikasi.
- **MongoDB Atlas**: Untuk menyimpan data aplikasi.
- **Midtrans Snap**: Untuk menangani pembayaran.
- **Google Developer Console**: Untuk konfigurasi OAuth.

### Langkah Instalasi

1. **Clone repositori ini**:
   ```bash
   git clone https://github.com/gusamixk/news-app.git

2. **Masuk Ke Direktori Proyek Dan Install Dependensi**
   ```bash
   cd news-app
   npm install

3.**Konfigurasikan file .env: Setelah dependensi terinstal, buat file .env di direktori proyek dan tambahkan konfigurasi berikut (gantilah dengan nilai Anda sendiri):**:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   MIDTRANS_SERVER_KEY=your_midtrans_server_key
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret

4. **Jalankan Aplikasi** :
   ```bash
    npm run dev

5.**Buka Di Browser**:
   ```bash
   http://localhost:3000




