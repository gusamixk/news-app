## 👥 Kelompok 3 - Kelas 5 A

| No  | Nama                        | NIM           |
|-----|-----------------------------|---------------|
| 1   | Virganda Rimba Asmara       | 22104410010   |
| 2   | Zoulvia Hanest Khinanti     | 21104410011   |
| 3   | Rizky Yuniz Teresya         | 21104410013   |
| 4   | Tandiyo Dwi Oktavian        | 22104410017   |
| 5   | Muhamad Gus Amix Kusuma     | 22104410054   |
| 6   | Bintang Lailatul Mukharomah | 22104410062   |

---

## 📚 Mata Kuliah
**Pemrograman API**

---

# 🌟 Jurnalight 🌟

![GitHub last commit](https://img.shields.io/github/last-commit/gusamixk/news-app)
![GitHub issues](https://img.shields.io/github/issues/gusamixk/news-app)
![GitHub stars](https://img.shields.io/github/stars/gusamixk/news-app?style=social)

**Web Blog Jurnalight**

Jurnalight adalah platform blog berita online yang dirancang untuk menyajikan berita terkini dengan fitur eksklusif bagi pengguna yang terdaftar. Dengan Jurnalight, pengguna dapat menikmati berita terbaru, artikel mendalam, serta layanan premium yang memungkinkan pengguna mengunggah berita melalui admin. Website ini dikembangkan menggunakan framework **Next.js** untuk performa cepat dan pengelolaan halaman yang dinamis, serta didukung oleh **Tailwind CSS** untuk desain antarmuka yang modern dan responsif. Platform ini memberikan akses mudah ke berita dengan pengalaman pengguna yang intuitif dan efisien.

---

## 🚀 Fitur Utama

| Fitur                     | Deskripsi                                                                                 |
|---------------------------|-------------------------------------------------------------------------------------------|
| **OAuth**                 | Login/Register dengan Google untuk autentikasi mudah.                                     |
| **JWT (JSON Web Token)**  | Keamanan akses dengan token autentikasi.                                                 |
| **Payment Gateway**       | Sistem pembayaran premium melalui Midtrans Snap.                                         |
| **Authorization**         | Role-based access control (Admin & Member).                                              |
| **Admin Panel**           | CRUD berita, manajemen user, dan verifikasi pembayaran.                              |
| **Beranda & Artikel**     | Halaman beranda dan artikel berita responsif dengan kategori terorganisir.               |

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

### 1. Clone Repositori

```bash
# Clone repositori
git clone https://github.com/gusamixk/news-app.git

# Masuk ke direktori proyek dan install dependensi
cd news-app
npm install

# Buat dan konfigurasi file .env
# Tambahkan konfigurasi berikut ke file .env Anda:
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
MIDTRANS_SERVER_KEY=your_midtrans_server_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Jalankan aplikasi
npm run dev

# Akses di browser di:
# http://localhost:3000
