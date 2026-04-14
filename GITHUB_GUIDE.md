# Panduan Solusi "Hijau" GitHub (InfoKilat 2026)

Jika Anda melihat pesan "remote origin already exists" atau "repository not found", jalankan perintah di bawah ini secara berurutan. Perintah ini akan menghapus pengaturan yang salah dan memasang yang benar.

## Langkah 1: Atur Identitas (Wajib Sekali)
```bash
git config --global user.email "email-anda@gmail.com"
git config --global user.name "Nama Anda"
```

## Langkah 2: Reset dan Upload Ulang (Solusi Error)
Jalankan baris demi baris:

```bash
# 1. Hapus koneksi lama yang eror (Solusi: remote origin already exists)
git remote remove origin 2>/dev/null || true

# 2. Hubungkan kembali dengan URL yang BENAR (nurhidyah - tanpa 'a' tambahan)
git remote add origin https://github.com/nurhidyah/berita-terkini.git

# 3. Bersihkan cache Git agar folder berat (node_modules) tidak ikut terupload
git rm -r --cached .

# 4. Tambahkan ulang file (sekarang .gitignore akan bekerja)
git add .

# 5. Simpan perubahan
git commit -m "feat: Perbaikan koneksi GitHub dan pembersihan file"

# 6. Upload ke GitHub
git push -u origin main
```

## Mengapa tadi Gagal?
1. **Typo URL**: Di terminal Anda tertulis `nurhidayah` (pakai 'a'), sedangkan akun Anda adalah `nurhidyah`.
2. **Koneksi Ganda**: Pesan `already exists` muncul karena Anda mencoba menambah pintu (remote) yang sudah terpasang. Perintah `remote remove` akan membongkarnya terlebih dahulu.
3. **File Berat**: Tanpa file `.gitignore` yang saya buat di atas, Git akan mencoba mengunggah ribuan file sistem yang dilarang oleh GitHub. Sekarang sudah aman.