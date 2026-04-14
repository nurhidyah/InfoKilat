# Panduan Solusi "Hijau" GitHub (InfoKilat 2026)

Jika Anda melihat pesan "remote origin already exists" atau "nothing to commit", jalankan perintah di bawah ini secara berurutan. Perintah ini akan membersihkan pengaturan yang salah dan memaksa Git mengunggah file yang benar.

## Langkah 1: Atur Identitas (Wajib Sekali)
```bash
git config --global user.email "email-anda@gmail.com"
git config --global user.name "Nama Anda"
```

## Langkah 2: Reset dan Upload Ulang (Solusi Semua Error)
Jalankan baris demi baris di terminal Anda:

```bash
# 1. Hapus koneksi lama yang salah
git remote remove origin 2>/dev/null || true

# 2. Hubungkan kembali dengan URL yang BENAR (nurhidyah)
git remote add origin https://github.com/nurhidyah/berita-terkini.git

# 3. Pastikan file .gitignore terbaca (agar tidak berat)
git add .

# 4. Simpan perubahan (Jika muncul 'nothing to commit', lanjut ke langkah 5)
git commit -m "feat: Bangun InfoKilat 2026 dan perbaikan koneksi"

# 5. Upload ke GitHub (Pastikan URL sudah benar)
git push -u origin main
```

## Mengapa muncul "Nothing to commit"?
Itu artinya semua file Anda sudah tersimpan di database lokal Git. Anda hanya perlu langsung melakukan **Langkah 5 (git push)** setelah memastikan **Langkah 1 & 2** sudah dijalankan dengan URL yang benar.

## Mengapa muncul "Repository not found"?
Karena sebelumnya ada kesalahan ketik `nurhidayah` (pakai 'a'). URL yang benar adalah `nurhidyah`. Perintah `remote remove` dan `remote add` di atas akan memperbaikinya secara otomatis.
