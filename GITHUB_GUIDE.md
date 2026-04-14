# Panduan Solusi "Hijau" InfoKilat 2026

Jika Anda melihat pesan "remote origin already exists" atau "repository not found", jalankan perintah di bawah ini secara berurutan di terminal Anda.

## Langkah 1: Atur Identitas (Wajib)
Jalankan ini jika Anda belum pernah mengatur nama di komputer ini:
```bash
git config --global user.email "email-anda@gmail.com"
git config --global user.name "Nama Anda"
```

## Langkah 2: Reset Koneksi & Upload (Solusi Error Merah)
Salin dan tempel baris demi baris perintah di bawah ini:

```bash
# 1. Hapus koneksi lama yang salah (Mengatasi error 'already exists')
git remote remove origin 2>/dev/null || true

# 2. Hubungkan kembali dengan URL yang BENAR
git remote add origin https://github.com/nurhidyah/berita-terkini.git

# 3. Paksa Git untuk mengenali file .gitignore baru (Pembersihan cache)
git rm -r --cached . 2>/dev/null || true

# 4. Tandai semua file kembali (Sekarang node_modules akan diabaikan)
git add .

# 5. Simpan perubahan (Ini akan membuat status menjadi 'Hijau')
git commit -m "feat: Perbaikan koneksi dan optimasi file upload"

# 6. Kirim file ke GitHub
git push -u origin main
```

## Mengapa muncul "Nothing to commit"?
Itu artinya semua file Anda sudah tersimpan di database lokal Git. Jika ini muncul, Anda bisa langsung melompat ke perintah terakhir yaitu **Langkah 6 (git push)**.

## Mengapa muncul "Repository not found"?
Karena adanya kesalahan ketik pada URL sebelumnya atau masalah autentikasi. Perintah `remote remove` dan `remote add` di atas akan memperbaikinya secara otomatis dengan URL yang sudah saya benerin.
