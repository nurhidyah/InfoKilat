# Panduan Menghubungkan InfoKilat ke GitHub

Ikuti langkah-langkah di bawah ini untuk mengunggah proyek Anda ke GitHub:

## 1. Persiapan di GitHub
1. Masuk ke akun [GitHub](https://github.com).
2. Klik tombol **New** untuk membuat repositori baru.
3. Beri nama (misal: `infokilat-news-2026`).
4. Jangan centang "Initialize this repository with a README" (karena kita sudah punya kodenya).
5. Klik **Create repository**.

## 2. Perintah Terminal (Git)
Buka terminal Anda di direktori proyek ini dan jalankan perintah berikut secara berurutan:

```bash
# Inisialisasi git
git init

# Tambahkan semua file (kecuali yang ada di .gitignore)
git add .

# Buat commit pertama
git commit -m "Menyelesaikan fitur berita 2026 dan integrasi Firebase"

# Atur cabang utama ke main
git branch -M main

# Hubungkan ke repositori GitHub Anda
# GANTI URL di bawah ini dengan URL dari GitHub Anda!
git remote add origin https://github.com/USERNAME_ANDA/NAMA_REPO_ANDA.git

# Unggah kode
git push -u origin main
```

## 3. Catatan Penting
- **Keamanan**: Pastikan file `.env` tidak pernah diunggah. File `.gitignore` yang sudah saya buat akan mencegah hal ini secara otomatis.
- **Firebase**: Jika Anda ingin menggunakan GitHub Actions untuk deploy otomatis, Anda bisa mengaturnya melalui tab **Settings > Actions** di GitHub setelah kode terunggah.