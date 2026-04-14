# Panduan Solusi Error "Merah" GitHub (InfoKilat 2026)

Jika `git commit` Anda merah, ikuti urutan ini dengan teliti. Jangan lewatkan langkah 1 & 2.

## Langkah 1: Identitas (PENTING)
Git menolak commit jika tidak tahu siapa Anda. Jalankan ini di terminal (ganti dengan info Anda):
```bash
git config --global user.email "email-anda@gmail.com"
git config --global user.name "Nama Anda"
```

## Langkah 2: Proses Upload Anti-Gagal
Jalankan perintah ini satu per satu:

```bash
# 1. Inisialisasi ulang
git init

# 2. Tambahkan semua file (PENTING: Jangan lupa tanda titik di akhir)
git add .

# 3. Commit (Sekarang seharusnya sudah Hijau/Berhasil)
git commit -m "feat: Rilis InfoKilat 2026 - Versi Stabil"

# 4. Hapus remote lama jika ada konflik
git remote remove origin 2>/dev/null || true

# 5. Hubungkan ke repositori Anda
git remote add origin https://github.com/nurhidyah/berita-terkini.git

# 6. Pastikan di branch main
git branch -M main

# 7. Push/Upload
git push -u origin main
```

## Kenapa tadi Merah?
1. **Belum `git add .`**: Git tidak tahu file mana yang mau disimpan.
2. **Belum Identitas**: Git butuh `user.email` dan `user.name` untuk mencatat siapa yang mengubah kode.
3. **Folder Terkunci**: Pastikan terminal Anda punya izin akses (Run as Administrator jika di Windows).

Jika sudah sampai Langkah 7 dan muncul jendela Login GitHub, silakan Login. Setelah itu, cek halaman GitHub Anda, semua file akan muncul di sana!
