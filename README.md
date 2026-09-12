# Beniso Website

Website company profile untuk **PT Beniso Makmur Perkasa**, perusahaan jasa fabrikasi logam & pengelasan (welding) yang berlokasi di Cikarang.

Website ini berupa landing page satu halaman (single page) yang menampilkan profil perusahaan, layanan, portofolio proyek, workshop, sertifikasi, daftar klien, dan informasi kontak.

> **Catatan sumber data:** Seluruh konten teks (deskripsi layanan, key factors, data klien, statistik, dll) diambil dan disusun ulang dari dokumen PDF company profile resmi perusahaan. Jika ada pembaruan data, sesuaikan langsung pada konstanta terkait di `src/routes/index.tsx` mengikuti versi terbaru dokumen company profile.

## Tech Stack

- **Bahasa:** TypeScript
- **Framework:** [TanStack Start](https://tanstack.com/start) (berbasis React 19) dengan routing dari **TanStack Router**
- **Build tool:** Vite 8, server runtime via **Nitro**
- **Styling:** Tailwind CSS v4
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (berbasis Radix UI)
- **Form & validasi:** react-hook-form + zod
- **Data/state:** TanStack Query
- **Icon:** lucide-react

## Struktur Project

```
├── public/                 # Aset statis (favicon, logo, gambar hero/proyek/workshop/klien)
├── src/
│   ├── routes/
│   │   ├── __root.tsx      # Layout root, meta tag SEO, error & 404 handler
│   │   └── index.tsx       # Halaman utama (semua section landing page)
│   ├── components/
│   │   ├── site/           # Komponen khusus website ini (mis. Placeholder)
│   │   └── ui/             # Komponen shadcn/ui
│   ├── hooks/               # Custom hooks (mobile detection, scroll reveal)
│   ├── lib/                 # Utilities & error handling
│   ├── router.tsx           # Setup router + query client
│   ├── server.ts             # Entry point server
│   └── start.ts              # Middleware (CSRF, error handling)
├── vite.config.ts
└── package.json
```

## Menjalankan Secara Lokal

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview hasil build
npm run preview
```

## Mengubah Konten

Sebagian besar konten (data layanan, proyek, klien, sertifikasi, statistik, hero slide, dll) didefinisikan sebagai konstanta di bagian atas file `src/routes/index.tsx`. Untuk memperbarui konten, cukup ubah nilai pada konstanta terkait — tidak perlu mengubah komponen/logika tampilan.

Contoh konstanta yang tersedia:
- `NAV` — menu navigasi
- `SOCIALS` — tautan Instagram/TikTok
- `HERO_SLIDES` — slide gambar hero
- `LAYANAN` — daftar layanan
- `KEY_FACTORS` — 5C key factors perusahaan
- `PROYEK` — galeri proyek
- `WORKSHOP_FOTO` — foto workshop
- `SERTIFIKASI` — daftar sertifikasi
- `KLIEN` — daftar klien & logo

## Deployment

Project ini menggunakan TanStack Start + Nitro (server-capable), sehingga secara default di-build sebagai aplikasi Node.js. Untuk hosting di shared hosting berbasis cPanel (tanpa dukungan Node.js), pertimbangkan untuk melakukan static export/prerender karena konten website ini sepenuhnya statis (tidak ada logika server-side dinamis).
