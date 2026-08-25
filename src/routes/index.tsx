import { createFileRoute } from "@tanstack/react-router";
import { Placeholder } from "@/components/site/Placeholder";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Proyek", href: "#proyek" },
  { label: "Workshop", href: "#workshop" },
  { label: "Sertifikasi", href: "#sertifikasi" },
  { label: "Klien", href: "#klien" },
  { label: "Kontak", href: "#kontak" },
];

const LAYANAN = [
  {
    no: "01",
    title: "Struktur Baja",
    desc: "Perencanaan, pemotongan, pembentukan, hingga pengelasan struktur baja untuk kebutuhan pabrik dan infrastruktur.",
  },
  {
    no: "02",
    title: "Rangka & Rak Logam",
    desc: "Rak multi-tier, trolley, wire mesh container, dan rangka custom sesuai spesifikasi teknis pelanggan.",
  },
  {
    no: "03",
    title: "Tangki & Perpipaan",
    desc: "Tangki penyimpanan dan sistem perpipaan dengan sambungan las berkualitas tinggi dan uji kerapatan.",
  },
  {
    no: "04",
    title: "Komponen Mekanis",
    desc: "Part presisi, hopper, platform, dan tangga industri lengkap dengan railing keselamatan.",
  },
  {
    no: "05",
    title: "Jasa Pengelasan",
    desc: "Spesialisasi welding dengan operator berkompeten, menjaga presisi dan daya tahan hasil produksi.",
  },
  {
    no: "06",
    title: "Finishing & Coating",
    desc: "Sandblasting, painting, dan packaging siap kirim ke lokasi klien.",
  },
];

const KEY_FACTORS = [
  { title: "Consistent", desc: "Mutu yang sama di setiap batch produksi." },
  { title: "Communication", desc: "Update progres terbuka sepanjang proyek." },
  { title: "Continuous Improvement", desc: "Evaluasi proses tiap penyelesaian order." },
  { title: "Confident", desc: "Berani menjamin hasil sesuai spesifikasi." },
  { title: "Commitment", desc: "Tepat waktu, tepat ukuran, tepat biaya." },
];

const STATS = [
  { value: "2020", label: "Berdiri sejak 20 Februari" },
  { value: "12+", label: "Klien manufaktur aktif" },
  { value: "1", label: "Workshop milik sendiri" },
  { value: "K3", label: "Standar keselamatan kerja" },
];

const PROYEK = [
  "Industrial lift structure",
  "Wire mesh storage cage",
  "Orange frame rack (MAP-I 405)",
  "Green container K23-10",
  "Silver hopper basin",
  "Platform & tangga industri",
  "Workstation panel",
  "Blue rack structure",
  "Metal cart beroda",
];

const SERTIFIKASI = [
  { nama: "Nama Sertifikasi", lembaga: "Lembaga Penerbit", tahun: "20xx" },
  { nama: "Nama Sertifikasi", lembaga: "Lembaga Penerbit", tahun: "20xx" },
  { nama: "Nama Sertifikasi", lembaga: "Lembaga Penerbit", tahun: "20xx" },
  { nama: "Nama Sertifikasi", lembaga: "Lembaga Penerbit", tahun: "20xx" },
];

const KLIEN = [
  "CMWI",
  "Itomol",
  "INGRESS",
  "INTIKOM",
  "MTAT",
  "Raja Jaya Teknik",
  "SULZER",
  "Asian Isuzu Casting Center",
  "Hasura Mitra Gemilang",
  "MAP-I",
  "UNO MINDA",
  "NK Minda Group",
];

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-primary" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
        {children}
      </span>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Notice mockup */}
      <div className="bg-accent px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-foreground">
        Mockup — foto, logo & sertifikat masih placeholder
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary font-display text-sm font-bold text-primary-foreground shadow-sm shadow-primary/20">
              B
            </span>
            <span className="leading-tight">
              <span className="block font-display text-sm font-bold tracking-tight">
                PT BENISO MAKMUR PERKASA
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-primary">
                Fabrication &amp; Welding
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#kontak"
            className="hidden rounded-sm bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground shadow-sm shadow-primary/25 transition-opacity hover:opacity-90 sm:inline-block"
          >
            Minta Penawaran
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <div
            aria-hidden
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, currentColor 0 1px, transparent 1px 64px), repeating-linear-gradient(0deg, currentColor 0 1px, transparent 1px 64px)",
            }}
          />
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-white/10 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionLabel>Distributor kebutuhan fabrication</SectionLabel>
              <h1 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
                Fabrikasi logam presisi,
                <span className="block text-primary-foreground/90">dikerjakan sekali jadi.</span>
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
                PT Beniso Makmur Perkasa mengerjakan pembuatan dan pengerjaan produk logam
                dengan spesialisasi pengelasan — dari perencanaan, pemotongan, pembentukan,
                sampai pengelasan komponen sesuai standar mutu dan K3.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#kontak"
                  className="rounded-sm bg-primary-foreground px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-primary shadow-sm shadow-black/10 transition-opacity hover:opacity-90"
                >
                  Konsultasi Proyek
                </a>
                <a
                  href="#proyek"
                  className="rounded-sm border border-primary-foreground/30 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Lihat Hasil Kerja
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Placeholder label="Foto hero workshop" ratio="3 / 4" className="col-span-1 row-span-2" />
              <Placeholder label="Foto produk rak" ratio="4 / 3" />
              <Placeholder label="Foto pengelasan" ratio="4 / 3" />
            </div>
          </div>
          <div className="relative border-t border-primary-foreground/15 bg-black/10">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 md:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="py-6 md:py-8">
                  <div className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-primary-foreground/65">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tentang */}
        <section id="tentang" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionLabel>Tentang Kami</SectionLabel>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Perusahaan fabrikasi yang tumbuh bersama industri manufaktur
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Berdiri sejak 20 Februari 2020, kami bergerak di bidang pembuatan dan
                  pengerjaan produk logam dengan spesialisasi pada proses pengelasan —
                  menjamin kualitas, presisi, dan daya tahan setiap hasil produksi sesuai
                  standar industri.
                </p>
                <p>
                  Didukung fasilitas produksi modern dan tenaga kerja berkompeten, kami
                  melayani struktur baja, rangka logam, tangki penyimpanan, sistem perpipaan,
                  dan komponen mekanis lain yang memerlukan sambungan las berkualitas tinggi.
                </p>
                <p>
                  Setiap produk diproduksi berdasarkan spesifikasi teknis yang disepakati,
                  sehingga memenuhi tuntutan fungsional dan estetika untuk proyek
                  infrastruktur, manufaktur, maupun sektor industri lainnya.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-sm border-l-4 border-l-primary border-border bg-card p-6">
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.24em] text-primary">
                  Visi
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Responsif &amp; solutif dalam memberikan nilai tambah kepada pelanggan
                  melalui produk &amp; layanan berkualitas.
                </p>
              </div>
              <div className="rounded-sm border-l-4 border-l-primary border-border bg-card p-6">
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.24em] text-primary">
                  Misi
                </h3>
                <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Meningkatkan kesejahteraan &amp; mengembangkan kompetensi karyawan untuk
                    menjawab kebutuhan pelanggan.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Memberikan pelayanan profesional yang memenuhi standar K3 (kesehatan,
                    keselamatan kerja &amp; lingkungan).
                  </li>
                </ul>
              </div>
              <Placeholder label="Foto tim / kantor" ratio="16 / 9" className="sm:col-span-2" />
            </div>
          </div>

          {/* Key factors */}
          <div className="mt-16">
            <SectionLabel>Key Factors</SectionLabel>
            <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
              {KEY_FACTORS.map((k, i) => (
                <div key={k.title} className="group bg-card p-5 transition-colors hover:bg-primary/[0.03]">
                  <span className="font-display text-xs font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-base font-bold">{k.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{k.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Layanan */}
        <section id="layanan" className="border-y border-border bg-secondary/60">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <SectionLabel>Layanan</SectionLabel>
            <h2 className="max-w-2xl font-display text-3xl font-bold sm:text-4xl">
              Solusi fabrikasi lengkap dalam satu workshop
            </h2>
            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {LAYANAN.map((l) => (
                <div key={l.no} className="group bg-card p-6 transition-colors hover:bg-primary/[0.03]">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-sm font-bold text-primary">
                      {l.no}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary/10 text-[10px] font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      →
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold">{l.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proyek */}
        <section id="proyek" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel>Our Fabrication Project</SectionLabel>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Hasil kerja kami</h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Galeri akan diisi foto proyek asli. Sementara ini setiap kartu menampilkan
              keterangan produk yang sudah pernah dikerjakan.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROYEK.map((p) => (
              <figure key={p} className="group">
                <Placeholder label="Foto proyek" ratio="4 / 3" />
                <figcaption className="mt-2 flex items-center justify-between text-xs">
                  <span className="font-medium">{p}</span>
                  <span className="text-muted-foreground">Fabrikasi</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Workshop */}
        <section id="workshop" className="bg-steel text-steel-foreground">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionLabel>Our Workshop</SectionLabel>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Workshop khusus untuk kebutuhan fabrikasi konsumen
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-steel-foreground/75">
                Area produksi dengan mezzanine, overhead crane, dan ruang kerja terpisah untuk
                perakitan serta finishing. Semua proses berjalan di bawah kendali mutu dan
                prosedur keselamatan kerja kami sendiri.
              </p>
              <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                {["Overhead crane", "Mezzanine & storage", "Area welding", "Area finishing"].map(
                  (f) => (
                    <li key={f} className="flex items-center gap-2 text-steel-foreground/80">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-[10px] font-bold text-primary">✓</span>
                      {f}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Placeholder label="Eksterior workshop" ratio="16 / 10" className="col-span-2" />
              <Placeholder label="Area produksi" ratio="4 / 3" />
              <Placeholder label="Overhead crane" ratio="4 / 3" />
            </div>
          </div>
        </section>

        {/* Sertifikasi */}
        <section id="sertifikasi" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <SectionLabel>Sertifikasi &amp; Legalitas</SectionLabel>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Kualitas yang terverifikasi
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              Slot untuk setiap sertifikat: nama, lembaga penerbit, tahun, dan scan dokumen.
              Kirim file-nya nanti, tinggal dimasukkan ke slot ini.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERTIFIKASI.map((s, i) => (
              <article
                key={i}
                className="flex flex-col rounded-sm border border-border bg-card p-4"
              >
                <Placeholder label="Scan sertifikat" ratio="3 / 4" />
                <h3 className="mt-4 font-display text-sm font-bold">{s.nama}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{s.lembaga}</p>
                <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  <span>{s.tahun}</span>
                  <span className="rounded-sm bg-primary px-2 py-0.5 font-semibold text-primary-foreground">
                    Valid
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Klien */}
        <section id="klien" className="border-y border-border bg-secondary/60">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <SectionLabel>Our Customer</SectionLabel>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Dipercaya oleh pelaku industri
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
              {KLIEN.map((k) => (
                <div
                  key={k}
                  className="flex h-24 items-center justify-center bg-card px-4 text-center text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:bg-primary/[0.05] hover:text-primary"
                >
                  {k}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Logo klien akan menggantikan teks ini setelah file logo tersedia.
            </p>
          </div>
        </section>

        {/* Kontak */}
        <section id="kontak" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionLabel>Kontak</SectionLabel>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Ada kebutuhan fabrikasi? Kirim spesifikasinya.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Terima kasih atas kerja sama dan kepercayaan Anda. Tim kami siap membantu
                menghitung kebutuhan material dan waktu pengerjaan.
              </p>
              <dl className="mt-8 space-y-5 text-sm">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Alamat
                  </dt>
                  <dd className="mt-1">
                    Jl. Amir Hamzah, Pagadungan, Kel. Sertajaya, Kec. Cikarang Timur
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Telepon
                  </dt>
                  <dd className="mt-1">
                    <a className="font-medium hover:text-primary" href="tel:+6281213612974">
                      +62 812-1361-2974
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a className="font-medium hover:text-primary" href="mailto:info@beniso.co.id">
                      info@beniso.co.id
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Website
                  </dt>
                  <dd className="mt-1">beniso.co.id</dd>
                </div>
              </dl>
            </div>

            <form
              className="rounded-sm border border-border bg-card p-6 shadow-sm shadow-primary/5"
              onSubmit={(e) => e.preventDefault()}
            >
              <p className="mb-5 text-[11px] uppercase tracking-[0.16em] text-primary">
                Form mockup — belum terkirim
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Nama
                  <input
                    type="text"
                    placeholder="Nama Anda"
                    className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm font-normal normal-case tracking-normal text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
                  />
                </label>
                <label className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Perusahaan
                  <input
                    type="text"
                    placeholder="PT ..."
                    className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm font-normal normal-case tracking-normal text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
                  />
                </label>
                <label className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:col-span-2">
                  Email / WhatsApp
                  <input
                    type="text"
                    placeholder="email@perusahaan.co.id"
                    className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm font-normal normal-case tracking-normal text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
                  />
                </label>
                <label className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:col-span-2">
                  Kebutuhan Fabrikasi
                  <textarea
                    rows={4}
                    placeholder="Jenis produk, jumlah, material, target waktu..."
                    className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm font-normal normal-case tracking-normal text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-6 w-full rounded-sm bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-sm shadow-primary/25 transition-opacity hover:opacity-90"
              >
                Kirim Permintaan
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t-4 border-t-primary bg-steel text-steel-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display font-bold uppercase tracking-[0.14em]">
            PT Beniso Makmur Perkasa
          </p>
          <p className="text-steel-foreground/60">
            © {new Date().getFullYear()} — Distributor Kebutuhan Fabrication, Cikarang Timur
          </p>
        </div>
      </footer>
    </div>
  );
}
