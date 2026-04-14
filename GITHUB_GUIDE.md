
# Panduan Solusi Error "Merah" GitHub (InfoKilat 2026)

Jika terminal Anda menunjukkan warna merah saat mengetik perintah Git, ikuti urutan perbaikan ini:

## Langkah 1: Atur Identitas (Wajib Sekali Seumur Hidup)
Git menolak menyimpan perubahan jika tidak tahu siapa Anda. Jalankan ini satu per satu (Ganti dengan data Anda):
```bash
git config --global user.email "email-anda@gmail.com"
git config --global user.name "Nama Anda"
```
*Tips: Jika muncul pesan merah tapi tidak ada tulisan "Error", biasanya itu hanya peringatan warna dari terminal, lanjutkan saja.*

## Langkah 2: Proses Upload "Anti-Gagal"
Jalankan perintah ini urut dari atas ke bawah:

```bash
# 1. Inisialisasi Git
git init

# 2. Tambahkan file (PENTING: Gunakan titik di akhir)
git add .

# 3. Commit (Simpan Perubahan)
# Sekarang perintah ini seharusnya sudah HIJAU/Berhasil
git commit -m "feat: Rilis InfoKilat 2026 Versi Stabil"

# 4. Hapus koneksi lama (untuk menghindari error "Remote already exists")
git remote remove origin 2>/dev/null || true

# 5. Hubungkan ke repositori Anda
git remote add origin https://github.com/nurhidyah/berita-terkini.git

# 6. Atur Cabang Utama
git branch -M main

# 7. Upload/Push
git push -u origin main
```

## Kenapa tadi Merah?
1. **Belum Login Git**: Anda harus menjalankan Langkah 1 di atas.
2. **Belum ada file yang di-add**: Anda harus mengetik `git add .` sebelum bisa melakukan `git commit`.
3. **Folder Terlalu Berat**: Tanpa file `.gitignore` yang saya buatkan, Git akan mencoba mengunggah ribuan file sampah. Sekarang sudah saya bersihkan!

Jika muncul jendela login GitHub setelah Langkah 7, silakan klik **"Sign in with your browser"** dan izinkan akses. Selesai!
