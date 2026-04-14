# Panduan Lengkap Upload InfoKilat ke GitHub

Ikuti langkah demi langkah di bawah ini untuk mengunggah proyek Anda dengan aman:

## Langkah 1: Persiapan di Dashboard GitHub
1. Pastikan Anda sudah membuat repositori bernama `berita-terkini` di akun GitHub `nurhidyah`.
2. Jika belum, buka [GitHub New Repo](https://github.com/new) dan beri nama: `berita-terkini`.
3. **PENTING**: Jangan centang opsi "Initialize this repository with a README" atau ".gitignore" karena kita sudah memilikinya di lokal.
4. Klik **Create repository**.

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

# Menghubungkan folder lokal ke server GitHub menggunakan URL Anda
git remote add origin https://github.com/nurhidyah/berita-terkini.git

# Mengirim kode ke GitHub
git push -u origin main
```

## Langkah 3: Verifikasi
Refresh halaman repositori GitHub Anda di `https://github.com/nurhidyah/berita-terkini`. Jika berhasil, Anda akan melihat daftar file seperti `src`, `public`, `package.json`, dll.

## Catatan Penting Keamanan:
File `.env` dan folder `.next` secara otomatis **tidak akan terunggah** karena sudah diatur di dalam file `.gitignore`. Ini penting untuk menjaga kerahasiaan kunci API Firebase Anda.
