
# Panduan Solusi "Hijau" GitHub (InfoKilat 2026)

Jika terminal Anda menunjukkan warna merah saat mengetik perintah Git, ikuti urutan perbaikan ini dengan teliti:

## Langkah 1: Atur Identitas (Wajib)
Git menolak menyimpan perubahan jika tidak tahu siapa Anda. Jalankan ini satu per satu (Ganti dengan data Anda):
```bash
git config --global user.email "email-anda@gmail.com"
git config --global user.name "Nama Anda"
```
*Catatan: Jika langkah ini tetap merah, pastikan Anda mengetik perintahnya dengan benar tanpa tanda kutip yang salah.*

## Langkah 2: Proses Upload "Anti-Gagal"
Jalankan perintah ini secara berurutan dari atas ke bawah:

```bash
# 1. Inisialisasi Git di folder proyek
git init

# 2. Tambahkan semua file (PENTING: Gunakan titik di akhir)
git add .

# 3. Commit (Simpan Perubahan) - Ini seharusnya sudah berhasil (Hijau)
git commit -m "feat: Rilis InfoKilat 2026 Versi Stabil"

# 4. Bersihkan koneksi lama (untuk menghindari error "Remote already exists")
git remote remove origin 2>/dev/null || true

# 5. Hubungkan ke repositori GitHub Anda
git remote add origin https://github.com/nurhidyah/berita-terkini.git

# 6. Atur Cabang Utama ke 'main'
git branch -M main

# 7. Upload/Push ke GitHub
git push -u origin main
```

## Kenapa tadi muncul Error Merah?
1. **Belum Ada Identitas**: Git butuh `user.email` dan `user.name`.
2. **Belum Ada File yang Ditandai**: Anda harus mengetik `git add .` sebelum bisa melakukan `git commit`.
3. **Konflik URL**: Perintah `git remote remove origin` saya tambahkan untuk menghapus pengaturan lama yang mungkin salah.
4. **File Terlalu Besar**: Tanpa file `.gitignore`, Git akan mencoba mengunggah ribuan file sistem (seperti node_modules) yang akan menyebabkan error.

Jika muncul jendela login GitHub setelah Langkah 7, silakan pilih **"Sign in with your browser"**. Selesai!
