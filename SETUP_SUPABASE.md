# Panduan Setup Supabase untuk Buku Tamu

## ⚙️ Langkah-Langkah Setup

### 1. Buka Supabase Dashboard
- Kunjungi https://app.supabase.com
- Login dengan akun Supabase Anda

### 2. Masuk ke SQL Editor
- Di sidebar, klik **SQL Editor**
- Klik **New Query**

### 3. Copy & Paste SQL Query Berikut

```sql
-- Create guests table
CREATE TABLE guests (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nama TEXT NOT NULL,
  nomor_id TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index untuk pencarian cepat
CREATE INDEX idx_guests_created_at ON guests(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE guests ENABLE ROW LEVEL SECURITY;

-- Create policy untuk SELECT (read)
CREATE POLICY "Allow public read access" ON guests
  FOR SELECT USING (true);

-- Create policy untuk INSERT (write)
CREATE POLICY "Allow public insert" ON guests
  FOR INSERT WITH CHECK (true);
```

### 4. Jalankan Query
- Klik tombol **Run** (atau Ctrl+Enter)
- Tunggu sampai berhasil ✓

### 5. Verifikasi Tabel
- Di sidebar, buka **Table Editor**
- Pastikan tabel "guests" sudah muncul
- Klik tabel untuk lihat strukturnya

## ✅ Selesai!

Aplikasi Buku Tamu Anda sekarang sudah terhubung dengan Supabase. Coba buka file `buku_tamu.html` di browser dan mulai tambahkan pengunjung!

## 📝 Detail Kolom Tabel

| Kolom | Tipe | Keterangan |
|-------|------|-----------|
| id | BIGINT | Primary key (auto-increment) |
| nama | TEXT | Nama pengunjung |
| nomor_id | TEXT | Nomor ID pengunjung |
| created_at | TIMESTAMP | Waktu data dibuat |
| updated_at | TIMESTAMP | Waktu data terakhir diupdate |

## 🔒 Keamanan

Sudah disertakan Row Level Security (RLS) yang memungkinkan:
- ✅ Siapa saja bisa membaca data
- ✅ Siapa saja bisa menambah data
- ❌ Tidak bisa mengedit/menghapus dari client (untuk keamanan)

Jika ingin mengedit atau menghapus data, Anda bisa melalui Supabase Dashboard atau membuat policy tambahan.

## 🆘 Troubleshooting

**Masalah: Data tidak tersimpan**
- Pastikan koneksi internet normal
- Cek console browser (F12 > Console) untuk error message
- Pastikan tabel sudah dibuat dengan benar

**Masalah: Error "relation 'guests' does not exist"**
- Query SQL belum dijalankan
- Ulangi langkah 3-4 di atas

**Masalah: CORS Error**
- Pastikan Supabase public access sudah diaktifkan (sudah default)
- Cek di Project Settings > API

## 🚀 Tips Lanjutan

Jika ingin add fitur delete/edit:
1. Buat policy tambahan untuk UPDATE dan DELETE
2. Tambahkan button delete di HTML
3. Tambahkan fungsi deleteGuest() di JavaScript

Contoh policy untuk DELETE:
```sql
CREATE POLICY "Allow public delete" ON guests
  FOR DELETE USING (true);
```

Selamat menggunakan Buku Tamu! 📚✍️
