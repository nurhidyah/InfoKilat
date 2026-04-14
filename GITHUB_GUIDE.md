
# Panduan Solusi "Hijau" GitHub (InfoKilat 2026)

Jika terminal Anda menunjukkan warna merah, ikuti urutan perbaikan ini dengan teliti. Pastikan Anda berada di folder proyek:

## Langkah 1: Atur Identitas (WAJIB)
Git menolak melakukan commit jika tidak tahu siapa Anda. Jalankan ini di terminal:
```bash
git config --global user.email "email-anda@gmail.com"
git config --global user.name "Nama Anda"
```

## Langkah 2: Proses Upload Anti-Gagal
Jalankan perintah ini satu per satu. Jangan dilewati:

```bash
# 1. Inisialisasi ulang Git
git init

# 2. Tambahkan file (Dengan adanya .gitignore yang baru saya buat, ini akan cepat)
git add .

# 3. Commit (Simpan Perubahan) - Sekarang seharusnya sudah Hijau
git commit -m "feat: Rilis InfoKilat 2026"

# 4. Hapus koneksi lama agar tidak bentrok
git remote remove origin 2>/dev/null || true

# 5. Hubungkan ke repositori Anda
git remote add origin https://github.com/nurhidyah/berita-terkini.git

# 6. Atur Cabang Utama
git branch -M main

# 7. Upload/Push ke GitHub
git push -u origin main
```

## Mengapa tadi Merah?
1. **node_modules**: Tanpa file `.gitignore`, Git mencoba mengunggah 30.000+ file sistem yang dilarang oleh GitHub. Sekarang sudah saya perbaiki.
2. **Identitas**: Git butuh email dan nama untuk mencatat siapa yang mengubah kode.
3. **Bentrokan URL**: Perintah `remote remove` memastikan URL `nurhidyah` terpasang dengan benar tanpa error "already exists".
