# Panduan Menghubungkan InfoKilat ke GitHub

Ikuti langkah-langkah di bawah ini untuk mengunggah proyek Anda ke GitHub dengan aman:

## 1. Persiapan di GitHub
1. Masuk ke akun [GitHub](https://github.com).
2. Klik tombol **New** (ikon + di pojok kanan atas) untuk membuat repositori baru.
3. Beri nama repositori (contoh: `infokilat-2026`).
4. Biarkan pengaturan lainnya (Public/Private sesuai keinginan).
5. **PENTING**: Jangan centang "Initialize this repository with a README" karena kita sudah punya file di lokal.
6. Klik **Create repository**.

## 2. Perintah Terminal (Git)
Buka terminal Anda di direktori proyek ini dan jalankan perintah berikut secara berurutan:

```bash
# 1. Inisialisasi git di folder proyek
git init

# 2. Tambahkan semua file (kecuali yang ada di .gitignore)
git add .

# 3. Buat commit pertama
git commit -m "feat: Rilis awal InfoKilat 2026 dengan fitur AI dan Kategori"

# 4. Atur cabang utama ke 'main'
git branch -M main

# 5. Hubungkan ke repositori GitHub Anda
# GANTI URL di bawah ini dengan URL Repositori yang Anda buat tadi!
git remote add origin https://github.com/USERNAME_ANDA/NAMA_REPO_ANDA.git

# 6. Unggah kode ke GitHub
git push -u origin main
```

## 3. Catatan Keamanan
- File `.env` yang berisi kunci API Firebase Anda **tidak akan terunggah** karena sudah kita masukkan ke `.gitignore`. Ini sangat penting untuk mencegah penyalahgunaan akun Firebase Anda.
- Jika Anda ingin melakukan perubahan di masa depan, cukup jalankan:
  `git add .` -> `git commit -m "pesan perubahan"` -> `git push`
