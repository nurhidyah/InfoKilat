# Panduan Lengkap Upload InfoKilat ke GitHub (Bebas Error)

Ikuti langkah-langkah di bawah ini secara berurutan. Jika ada error sebelumnya, panduan ini akan memperbaikinya secara otomatis.

## Langkah 1: Persiapan di Dashboard GitHub
1. Pastikan Anda sudah membuat repositori bernama `berita-terkini` di akun GitHub `nurhidyah`.
2. URL Repositori Anda: `https://github.com/nurhidyah/berita-terkini.git`

## Langkah 2: Menjalankan Perintah Git di Terminal
Buka terminal/command prompt tepat di folder proyek ini, lalu jalankan perintah ini satu per satu:

```bash
# 1. Menginisialisasi git (jika belum)
git init

# 2. Menghapus remote lama jika ada (untuk menghindari error 'origin already exists')
git remote remove origin 2>/dev/null || true

# 3. Menghubungkan folder lokal ke GitHub Anda
git remote add origin https://github.com/nurhidyah/berita-terkini.git

# 4. Menambahkan semua file ke dalam daftar tunggu
git add .

# 5. Membuat catatan perubahan pertama
git commit -m "feat: Rilis awal InfoKilat 2026 - Berhasil"

# 6. Memastikan kita berada di cabang utama 'main'
git branch -M main

# 7. Mengirim kode ke GitHub (Anda mungkin akan diminta login)
git push -u origin main
```

## Tips Jika Terjadi Error:
- **Error Permission Denied**: Pastikan Anda sudah login ke GitHub Desktop atau sudah mengatur SSH Key/Personal Access Token.
- **Error Tip of Branch is Behind**: Jika repositori di GitHub tidak kosong, gunakan `git push -u origin main --force` (Hanya lakukan ini jika Anda yakin).
- **Semua Hijau**: Jika terminal tidak memunculkan teks merah dan kembali ke baris perintah baru, berarti proses berhasil!

## Catatan Keamanan:
File `.env` dan folder `.next` secara otomatis **tidak akan terunggah** karena sudah diatur di dalam file `.gitignore`. Ini menjaga kunci API Firebase Anda tetap aman.