# Panduan Lengkap Upload InfoKilat ke GitHub

Ikuti langkah demi langkah di bawah ini untuk mengunggah proyek Anda dengan aman:

## Langkah 1: Persiapan di Dashboard GitHub
1. Buka [GitHub](https://github.com) dan masuk ke akun Anda.
2. Klik tombol **New** untuk membuat repositori baru.
3. Beri nama: `infokilat-2026`.
4. Pastikan pilihan **Public** atau **Private** sudah sesuai.
5. **PENTING**: Jangan centang opsi "Initialize this repository with a README" atau ".gitignore" karena kita sudah memilikinya di lokal.
6. Klik **Create repository**.
7. Salin URL HTTPS yang muncul (Contoh: `https://github.com/user/repo.git`).

## Langkah 2: Menjalankan Perintah Git
Buka terminal/command prompt tepat di folder proyek ini, lalu jalankan perintah ini satu per satu:

```bash
# Menginisialisasi git di komputer Anda
git init

# Menambahkan semua file ke dalam daftar tunggu (staging)
git add .

# Membuat catatan perubahan pertama
git commit -m "feat: Rilis awal InfoKilat 2026"

# Memastikan kita berada di cabang utama 'main'
git branch -M main

# Menghubungkan folder lokal ke server GitHub
# GANTI URL di bawah ini dengan URL yang Anda salin dari GitHub tadi!
git remote add origin https://github.com/USERNAME_ANDA/NAMA_REPO_ANDA.git

# Mengirim kode ke GitHub
git push -u origin main
```

## Langkah 3: Verifikasi
Refresh halaman repositori GitHub Anda. Jika berhasil, Anda akan melihat daftar file seperti `src`, `public`, `package.json`, dll.

## Catatan Penting Keamanan:
File `.env` dan folder `.next` secara otomatis **tidak akan terunggah** karena sudah diatur di dalam file `.gitignore`. Ini penting untuk menjaga kerahasiaan kunci API Firebase Anda.
