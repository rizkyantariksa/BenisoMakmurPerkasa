import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Placeholder } from "@/components/site/Placeholder";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Produk", href: "#produk" },
  { label: "Workshop", href: "#workshop" },
  { label: "Kontak", href: "#kontak" },
];

// Tautan sosial media resmi perusahaan.
const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
];

const HERO_SLIDES = [
  { label: "Foto hero workshop", gambar: "/images/hero/hero_1.jpeg", posisi: "center" },
  { label: "Proses pengelasan", gambar: "/images/hero/hero_2.jpeg", posisi: "center" },
  { label: "Hasil produk rak & tangki", gambar: "/images/hero/hero_3.jpeg", posisi: "center" },
  { label: "Area produksi", gambar: "/images/hero/hero_4.jpeg", posisi: "center" },
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
  {
    title: "Consistent",
    desc: "Menjaga standar kualitas kerja di setiap proyek, dari perencanaan hingga serah terima.",
  },
  {
    title: "Communication",
    desc: "Koordinasi yang jelas dengan pelanggan sepanjang proses pengerjaan proyek.",
  },
  {
    title: "Continuous Improvement",
    desc: "Terus mengembangkan cara kerja untuk menjawab kebutuhan industri yang terus berkembang.",
  },
  {
    title: "Confident",
    desc: "Menangani proyek dengan keyakinan yang dibangun dari pengalaman lapangan yang nyata.",
  },
  {
    title: "Commitment",
    desc: "Berkomitmen menyelesaikan setiap pekerjaan sesuai kesepakatan dengan pelanggan.",
  },
];

const STATS = [
  { value: "2020", label: "Berdiri sejak 20 Februari" },
  { value: "12+", label: "Klien manufaktur aktif" },
  { value: "1", label: "Workshop milik sendiri" },
  { value: "K3", label: "Standar keselamatan kerja" },
];

const TENTANG_FOTO = { gambar: "/images/tentangkami/tentang_kami.jpg", posisi: "center 43%" };

const OUR_OFFICE = [
  { nama: "Ruang Kantor Staff", gambar: "images/office/staff_room.png", posisi: "center" },
  { nama: "Ruang Meeting Internal", gambar: "images/office/meeting_room.png", posisi: "center" },
  { nama: "Lobby Kantor", gambar: "images/office/lobby.png", posisi: "center" },
];

const PRODUK = [
  { nama: "Industrial lift structure", gambar: "images/proyek/Industrial_lift_structure.jpeg", posisi: "center" },
  { nama: "Wire mesh storage cage", gambar: "images/proyek/Wire_mesh_storage_cage.jpeg", posisi: "center" },
  { nama: "Orange frame rack (MAP-I 405)", gambar: "images/proyek/Orange_frame_rack_(MAP-I 405).jpeg", posisi: "center" },
  { nama: "Green container K23-10", gambar: "images/proyek/Green_container_K23-10.jpeg", posisi: "center" },
  { nama: "Silver hopper basin", gambar: "images/proyek/Silver_hopper_basin.jpeg", posisi: "center" },
  { nama: "Platform & tangga industri", gambar: "images/proyek/Platform_&_tangga_industri.jpeg", posisi: "center" },
  { nama: "Workstation panel", gambar: "images/proyek/Workstation_panel.jpeg", posisi: "center" },
  { nama: "Blue rack structure", gambar: "images/proyek/Blue_rack_structure.jpeg", posisi: "center" },
  { nama: "Metal cart beroda", gambar: "images/proyek/Metal_cart_beroda.jpeg", posisi: "center" },
];

const WORKSHOP_FOTO = {
  eksterior: { gambar: "images/workshop/Eksterior_workshop.jpeg", posisi: "center" },
  produksi: { gambar: "images/workshop/Area_produksi.jpeg", posisi: "center" },
  crane: { gambar: "images/workshop/Overhead_crane.jpeg", posisi: "center" },
};

const SERTIFIKASI = [
  {
    nama: "Nama Sertifikasi",
    lembaga: "Lembaga Penerbit",
    tahun: "20xx",
    deskripsi:
      "Deskripsi singkat mengenai cakupan dan manfaat sertifikasi ini. Ganti dengan penjelasan asli.",
    gambar: "", // isi path gambar scan sertifikat, mis. "/sertifikat/1.jpg"
  },
  {
    nama: "Nama Sertifikasi",
    lembaga: "Lembaga Penerbit",
    tahun: "20xx",
    deskripsi:
      "Deskripsi singkat mengenai cakupan dan manfaat sertifikasi ini. Ganti dengan penjelasan asli.",
    gambar: "",
  },
  {
    nama: "Nama Sertifikasi",
    lembaga: "Lembaga Penerbit",
    tahun: "20xx",
    deskripsi:
      "Deskripsi singkat mengenai cakupan dan manfaat sertifikasi ini. Ganti dengan penjelasan asli.",
    gambar: "",
  },
  {
    nama: "Nama Sertifikasi",
    lembaga: "Lembaga Penerbit",
    tahun: "20xx",
    deskripsi:
      "Deskripsi singkat mengenai cakupan dan manfaat sertifikasi ini. Ganti dengan penjelasan asli.",
    gambar: "",
  },
];

const KLIEN = [
  { nama: "PT. Central Motor Wheel Indonesia", logo: "/images/klien/cmwi.png", website: "https://www.cmwi.co.id" },
  { nama: "PT. MTAT Indonesia", logo: "/images/klien/mtat.png", website: "" },
  { nama: "PT. Itomol Indonesia", logo: "/images/klien/itomol.png", website: "" },
  { nama: "PT. Tunas Teknologi Cemerlang", logo: "", website: "" },
  { nama: "PT. Nusantara Barutama Abadi", logo: "", website: "" },
  { nama: "PT. Yorozu Automotive Indonesia", logo: "/images/klien/yorozu.png", website: "" },
  { nama: "PT. Tunas Tumbuh Bersama", logo: "/images/klien/ttb.png", website: "" },
  { nama: "PT. Hasura Mitra Gemilang", logo: "", website: "" },
  { nama: "PT. Sugindo International", logo: "", website: "" },
  { nama: "PT. Ingress Industrial Indonesia", logo: "", website: "" },
  { nama: "PT. Raja Jaya Teknik", logo: "/images/klien/raja_jaya_teknik.png", website: "" },
  { nama: "PT. Isoku Cahaya Indonesia", logo: "", website: "" },
  { nama: "PT. Intikom Berlian Mustika", logo: "/images/klien/intikom.jpg", website: "" },
  { nama: "PT. Sulzer Indonesia", logo: "/images/klien/sulzer.png", website: "" },
  { nama: "PT. Asian Izusu Casting Center", logo: "/images/klien/aicc.png", website: "" },
  { nama: "PT. Adient Automotive Indonesia", logo: "/images/klien/adient.png", website: "" },
  { nama: "PT. Samara Inovasi Hutama", logo: "", website: "" },
  { nama: "PT. Aisin Automotive Indonesia", logo: "", website: "" },
];

function SectionLabel({
  children,
  tone = "default",
}: {
  children: string;
  tone?: "default" | "invert";
}) {
  const lineClass = tone === "invert" ? "bg-primary-foreground/70" : "bg-primary";
  const textClass = tone === "invert" ? "text-primary-foreground" : "text-primary";
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className={`h-px w-8 ${lineClass}`} />
      <span className={`text-xs font-semibold uppercase tracking-[0.24em] sm:text-sm ${textClass}`}>
        {children}
      </span>
    </div>
  );
}

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M15.5 3.5c.5 2 2 3.4 4 3.6v3.1a7.1 7.1 0 0 1-4-1.3v6.4a5.6 5.6 0 1 1-5.6-5.6c.28 0 .55.02.82.06v3.2a2.4 2.4 0 1 0 1.78 2.34V3.5h3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialLinks({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const icons = { Instagram: InstagramIcon, TikTok: TikTokIcon };
  const variantClass =
    variant === "dark"
      ? "border-steel-foreground/25 text-steel-foreground/70 hover:border-primary hover:text-primary"
      : "border-border text-muted-foreground hover:border-primary hover:text-primary";
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {SOCIALS.map((s) => {
        const Icon = icons[s.label as keyof typeof icons];
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${variantClass}`}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}

function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => window.clearInterval(id);
  }, []);

  const go = (dir: 1 | -1) => {
    setActive((i) => (i + dir + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <div aria-hidden className="absolute inset-0">
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={slide.label}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.gambar ? (
            <img
              src={slide.gambar}
              alt={slide.label}
              style={{ objectPosition: slide.posisi }}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="relative h-full w-full overflow-hidden bg-steel">
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.25]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, currentColor 0 1px, transparent 1px 14px)",
                }}
              />
              <span className="absolute bottom-24 right-5 text-[10px] font-medium uppercase tracking-[0.2em] text-primary-foreground/50 sm:right-8">
                {slide.label}
              </span>
            </div>
          )}
        </div>
      ))}
      {/* Scrim supaya teks tetap terbaca di atas foto */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/60 to-transparent" />

      {/* Kontrol slider: panah + indikator titik digabung jadi satu baris di
          bawah, supaya posisinya tidak pernah tumpang tindih dengan teks
          hero di layar sempit (posisinya tidak bergantung tinggi konten). */}
      <div className="absolute inset-x-0 bottom-5 z-10 flex items-center justify-center gap-4 sm:bottom-6">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Slide sebelumnya"
          className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20 sm:h-10 sm:w-10"
        >
          ‹
        </button>

        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.label}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ke slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-6 bg-primary-foreground" : "w-1.5 bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Slide berikutnya"
          className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20 sm:h-10 sm:w-10"
        >
          ›
        </button>
      </div>
    </div>
  );
}

function Index() {
  const [selectedSertifikasi, setSelectedSertifikasi] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onHeaderScroll = () => setScrolled(window.scrollY > 8);
    onHeaderScroll();
    window.addEventListener("scroll", onHeaderScroll, { passive: true });
    return () => window.removeEventListener("scroll", onHeaderScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    const revealAll = (instant: boolean) =>
      nodes.forEach((node) => {
        if (instant) node.setAttribute("data-reveal-instant", "");
        node.classList.add("is-visible");
      });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealAll(true);
      return;
    }

    // Section yang sudah terlihat (atau sudah dilewati) saat JS jalan:
    // tampilkan tanpa animasi supaya tidak "kedip" atau menunggu load.
    const vh = window.innerHeight;
    const pending: HTMLElement[] = [];
    nodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      if (rect.top < vh * 0.92) {
        node.setAttribute("data-reveal-instant", "");
        node.classList.add("is-visible");
        requestAnimationFrame(() => node.removeAttribute("data-reveal-instant"));
      } else {
        pending.push(node);
      }
    });

    // Smooth scroll baru diaktifkan setelah mount, supaya restorasi posisi
    // scroll browser tidak ikut "terbang" balik ke atas.
    requestAnimationFrame(() => root.classList.add("smooth-scroll"));

    // Cek berbasis scroll (rAF-throttled): tetap akurat walau user scroll
    // sangat cepat atau melompat, jadi tidak ada section yang "tertinggal".
    let pendingNodes = pending;
    let ticking = false;

    const check = () => {
      ticking = false;
      const limit = window.innerHeight * 0.88;
      pendingNodes = pendingNodes.filter((node) => {
        if (node.getBoundingClientRect().top < limit) {
          node.classList.add("is-visible");
          return false;
        }
        return true;
      });
      if (pendingNodes.length === 0) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(check);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

  }, []);


  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur transition-colors duration-300 ${
          scrolled
            ? "border-border/70 bg-background/95"
            : "border-transparent bg-transparent backdrop-blur-none"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-sm shadow-black/10">
              <img
                src="/beniso-logo.png"
                alt="Logo PT Beniso Makmur Perkasa"
                className="h-full w-full rounded-full object-contain"
              />
            </span>
            <span className="leading-tight">
              <span
                className={`block font-display text-sm font-bold tracking-tight transition-colors ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                BENISO MAKMUR PERKASA
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-5 xl:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`whitespace-nowrap text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                  scrolled
                    ? "text-muted-foreground hover:text-primary"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <SocialLinks className="hidden sm:flex" variant={scrolled ? "light" : "dark"} />
            <a
              href="#kontak"
              className="hidden rounded-sm bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground shadow-sm shadow-primary/25 transition-opacity hover:opacity-90 sm:inline-block"
            >
              Diskusikan Proyek
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Buka menu"
              className={`flex h-10 w-10 items-center justify-center rounded-sm transition-colors xl:hidden ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-background transition-opacity duration-200 xl:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <a
            href="#"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-sm shadow-black/10">
              <img
                src="/beniso-logo.png"
                alt="Logo PT Beniso Makmur Perkasa"
                className="h-full w-full rounded-full object-contain"
              />
            </span>
            <span className="font-display text-sm font-bold tracking-tight text-foreground">
              BENISO MAKMUR PERKASA
            </span>
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Tutup menu"
            className="flex h-10 w-10 items-center justify-center rounded-sm text-foreground"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 py-6">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-border py-4 text-base font-semibold uppercase tracking-[0.1em] text-foreground transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-between gap-4 border-t border-border px-5 py-5">
          <SocialLinks />
          <a
            href="#kontak"
            onClick={() => setMobileOpen(false)}
            className="rounded-sm bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground shadow-sm shadow-primary/25"
          >
            Minta Penawaran
          </a>
        </div>
      </div>

      <main>
        {/* Hero */}
        <section className="relative flex min-h-screen flex-col overflow-hidden bg-primary text-primary-foreground">
          {/* Wrapper visual+teks hero, terpisah dari blok statistik di bawah,
              supaya kontrol slider (absolute bottom-5 di dalam HeroSlider)
              berhenti di atas statistik, bukan di dasar section penuh. */}
          <div className="relative flex flex-1 flex-col overflow-hidden">
            <HeroSlider />
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
            <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-5 py-24">
              <div className="max-w-2xl">
                <h1 className="font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
                  Fabrikasi logam presisi,
                  <span className="block text-primary-foreground/90">dikerjakan sekali jadi.</span>
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                  PT Beniso Makmur Perkasa mengerjakan pembuatan dan pengerjaan produk logam
                  dengan spesialisasi pengelasan mulai dari perencanaan, pemotongan, pembentukan,
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
                    href="#produk"
                    className="rounded-sm border border-primary-foreground/30 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Lihat Hasil Kerja
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative border-t border-primary-foreground/15 bg-black/10">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 md:grid-cols-4">
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
        <section data-reveal id="tentang" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionLabel>Tentang Kami</SectionLabel>
              <h2 className="font-display text-4xl font-bold sm:text-5xl">
                Perusahaan fabrikasi yang tumbuh bersama industri manufaktur
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Berdiri sejak 20 Februari 2020, kami bergerak di bidang pembuatan dan
                  pengerjaan produk logam dengan spesialisasi pada proses pengelasan, serta
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
              <div className="rounded-sm border-l-4 border-l-primary border-border bg-card p-6 sm:p-7">
                <h3 className="font-display text-xl font-bold uppercase tracking-[0.18em] text-primary sm:text-2xl">
                  Visi
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  “Responsif &amp; Solutif dalam memberikan nilai tambah kepada pelanggan
                  melalui produk &amp; layanan berkualitas.”
                </p>
              </div>
              <div className="rounded-sm border-l-4 border-l-primary border-border bg-card p-6 sm:p-7">
                <h3 className="font-display text-xl font-bold uppercase tracking-[0.18em] text-primary sm:text-2xl">
                  Misi
                </h3>
                <ul className="mt-4 space-y-5">
                  <li className="flex gap-4">
                    <span className="font-display text-2xl font-bold leading-none text-primary/40">
                      01
                    </span>
                    <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                      Memberikan pelayanan dengan sikap profesional yang memenuhi standar K3
                      (Kesehatan, Keselamatan Kerja &amp; Lingkungan).
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-display text-2xl font-bold leading-none text-primary/40">
                      02
                    </span>
                    <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                      Meningkatkan kesejahteraan &amp; mengembangkan kompetensi karyawan di
                      perusahaan untuk menjawab kebutuhan pelanggan.
                    </p>
                  </li>
                </ul>
              </div>
              {TENTANG_FOTO.gambar ? (
                <img
                  src={TENTANG_FOTO.gambar}
                  alt="Foto tim / kantor"
                  style={{ objectPosition: TENTANG_FOTO.posisi }}
                  className="sm:col-span-2 aspect-[16/9] w-full rounded-sm border border-border object-cover"
                />
              ) : (
                <Placeholder label="Foto tim / kantor" ratio="16 / 9" className="sm:col-span-2" />
              )}
            </div>
          </div>
        </section>

        {/* Key Factors (5C) */}
        <section
          data-reveal
          id="key-factors"
          className="border-y border-border bg-secondary/60"
        >
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <SectionLabel>Highlights</SectionLabel>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="max-w-2xl font-display text-4xl font-bold sm:text-5xl">
                Key Factors
              </h2>
              <p className="max-w-sm text-sm text-muted-foreground sm:text-base">
                Lima prinsip yang menjaga setiap proyek tetap konsisten.
              </p>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
              {KEY_FACTORS.map((k, i) => (
                <div
                  key={k.title}
                  className="group bg-card p-6 transition-colors hover:bg-primary/[0.03]"
                >
                  <span className="font-display text-sm font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold">{k.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{k.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Layanan */}
        <section data-reveal id="layanan" className="border-y border-border bg-secondary/60">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <SectionLabel>Layanan</SectionLabel>
            <h2 className="max-w-2xl font-display text-4xl font-bold sm:text-5xl">
              Solusi fabrikasi lengkap dalam satu workshop
            </h2>
            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {LAYANAN.map((l) => (
                <div key={l.no} className="group bg-card p-6 transition-colors hover:bg-primary/[0.03]">
                  <span className="font-display text-sm font-bold text-primary">{l.no}</span>
                  <h3 className="mt-6 font-display text-lg font-bold">{l.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Produk */}
        <section data-reveal id="produk" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel>Our Products</SectionLabel>
              <h2 className="font-display text-4xl font-bold sm:text-5xl">Produk Kami</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUK.map((p) => (
              <figure key={p.nama} className="group">
                {p.gambar ? (
                  <img
                    src={p.gambar}
                    alt={p.nama}
                    style={{ objectPosition: p.posisi }}
                    className="aspect-[4/3] w-full rounded-sm border border-border object-cover"
                  />
                ) : (
                  <Placeholder label="Foto proyek" ratio="4 / 3" />
                )}
                <figcaption className="mt-2 flex items-center justify-between text-xs">
                  <span className="font-medium">{p.nama}</span>
                  <span className="text-muted-foreground">Fabrikasi</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Workshop */}
        <section data-reveal id="workshop" className="bg-steel text-steel-foreground">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionLabel>Our Workshop</SectionLabel>
              <h2 className="font-display text-4xl font-bold sm:text-5xl">
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
              {WORKSHOP_FOTO.eksterior.gambar ? (
                <img
                  src={WORKSHOP_FOTO.eksterior.gambar}
                  alt="Eksterior workshop"
                  style={{ objectPosition: WORKSHOP_FOTO.eksterior.posisi }}
                  className="col-span-2 aspect-[16/10] w-full rounded-sm border border-border object-cover"
                />
              ) : (
                <Placeholder label="Eksterior workshop" ratio="16 / 10" className="col-span-2" />
              )}
              {WORKSHOP_FOTO.produksi.gambar ? (
                <img
                  src={WORKSHOP_FOTO.produksi.gambar}
                  alt="Area produksi"
                  style={{ objectPosition: WORKSHOP_FOTO.produksi.posisi }}
                  className="aspect-[4/3] w-full rounded-sm border border-border object-cover"
                />
              ) : (
                <Placeholder label="Area produksi" ratio="4 / 3" />
              )}
              {WORKSHOP_FOTO.crane.gambar ? (
                <img
                  src={WORKSHOP_FOTO.crane.gambar}
                  alt="Overhead crane"
                  style={{ objectPosition: WORKSHOP_FOTO.crane.posisi }}
                  className="aspect-[4/3] w-full rounded-sm border border-border object-cover"
                />
              ) : (
                <Placeholder label="Overhead crane" ratio="4 / 3" />
              )}
            </div>
          </div>
        </section>

        {/* Sertifikasi */}
        <section data-reveal id="sertifikasi" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <SectionLabel>Sertifikasi &amp; Legalitas</SectionLabel>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              Kualitas yang terverifikasi
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERTIFIKASI.map((s, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedSertifikasi(i)}
                className="group flex flex-col rounded-sm border border-border bg-card p-4 text-left transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="relative">
                  <Placeholder label="Scan sertifikat" ratio="3 / 4" />
                  <div className="absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-opacity group-hover:bg-background/40 group-hover:opacity-100">
                    <span className="rounded-sm bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-foreground">
                      Lihat detail
                    </span>
                  </div>
                </div>
                <h3 className="mt-4 font-display text-sm font-bold">{s.nama}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{s.lembaga}</p>
                <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  <span>{s.tahun}</span>
                  <span className="rounded-sm bg-primary px-2 py-0.5 font-semibold text-primary-foreground">
                    Valid
                  </span>
                </div>
              </button>
            ))}
          </div>

          <Dialog
            open={selectedSertifikasi !== null}
            onOpenChange={(open) => !open && setSelectedSertifikasi(null)}
          >
            <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
              {(() => {
                const detail =
                  selectedSertifikasi !== null ? SERTIFIKASI[selectedSertifikasi] : undefined;
                if (!detail) return null;
                return (
                  <>
                    <DialogHeader>
                      <DialogTitle className="font-display text-2xl">{detail.nama}</DialogTitle>
                    </DialogHeader>

                    {detail.gambar ? (
                      <img
                        src={detail.gambar}
                        alt={detail.nama}
                        className="mt-2 w-full rounded-sm border border-border object-contain"
                      />
                    ) : (
                      <Placeholder label="Scan sertifikat (full)" ratio="3 / 4" className="mt-2" />
                    )}

                    <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      <span>{detail.lembaga}</span>
                      <span>{detail.tahun}</span>
                    </div>

                    <p className="mt-3 text-sm text-muted-foreground">{detail.deskripsi}</p>
                  </>
                );
              })()}
            </DialogContent>
          </Dialog>
        </section>

        {/* Klien */}
        <section data-reveal id="klien" className="border-y border-border bg-secondary/60">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <SectionLabel>Our Customer</SectionLabel>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              Dipercaya oleh pelaku industri
            </h2>

            {(() => {
              const denganLogo = KLIEN.filter((k) => k.logo);
              return denganLogo.length > 0 ? (
                <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
                  {denganLogo.map((k) => {
                    const isi = (
                      <img
                        src={k.logo}
                        alt={k.nama}
                        className="h-full max-h-12 w-full object-contain"
                      />
                    );
                    return k.website ? (
                      <a
                        key={k.nama}
                        href={k.website}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-24 items-center justify-center bg-card px-6 transition-colors hover:bg-primary/[0.05]"
                      >
                        {isi}
                      </a>
                    ) : (
                      <div
                        key={k.nama}
                        className="flex h-24 items-center justify-center bg-card px-6"
                      >
                        {isi}
                      </div>
                    );
                  })}
                </div>
              ) : null;
            })()}

            <div className="mt-10 grid gap-x-10 gap-y-2 border-t border-border pt-8 text-sm text-muted-foreground sm:grid-cols-2">
              {KLIEN.map((k) => (
                <div key={k.nama} className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{k.nama}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Office */}
        <section data-reveal id="our-office" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <SectionLabel>Our Office</SectionLabel>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Lingkungan kerja yang mendukung setiap proyek.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {OUR_OFFICE.map((o) => (
              <figure key={o.nama} className="group">
                {o.gambar ? (
                  <img
                    src={o.gambar}
                    alt={o.nama}
                    style={{ objectPosition: o.posisi }}
                    className="aspect-[3/4] w-full rounded-sm border border-border object-cover"
                  />
                ) : (
                  <Placeholder label="Foto kantor" ratio="3 / 4" />
                )}
                <figcaption className="mt-2 text-xs font-medium">{o.nama}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Kontak */}
        <section data-reveal id="kontak" className="bg-steel text-steel-foreground">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:py-24 lg:grid-cols-2">
            <div>
              <SectionLabel tone="invert">Kontak</SectionLabel>
              <h2 className="font-display text-4xl font-bold sm:text-5xl">
                Mari diskusikan proyek Anda.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-steel-foreground/70">
                Hubungi tim kami untuk kebutuhan konstruksi, renovasi, fabrikasi, atau
                pengolahan material pada fasilitas retail maupun pabrik Anda.
              </p>
              <a
                href="https://wa.me/6281213612974"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Hubungi via WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="border-t border-steel-foreground/15">
              {[
                {
                  icon: MapPin,
                  label: "Alamat",
                  value: "Jl. Amir Hamzah, Pagadungan, Kel. Sertajaya, Kec. Cikarang Timur",
                  href: "https://maps.google.com/?q=Jl.+Amir+Hamzah+Pagadungan+Sertajaya+Cikarang+Timur",
                },
                {
                  icon: Phone,
                  label: "Telepon",
                  value: "+62 812-1361-2974",
                  href: "tel:+6281213612974",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@beniso.co.id",
                  href: "mailto:info@beniso.co.id",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.label === "Alamat" ? "_blank" : undefined}
                  rel={c.label === "Alamat" ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 border-b border-steel-foreground/15 py-6"
                >
                  <c.icon className="h-5 w-5 shrink-0 text-primary" />
                  <div className="flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-steel-foreground/50">
                      {c.label}
                    </p>
                    <p className="mt-1 font-medium">{c.value}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-steel-foreground/40 transition-colors group-hover:text-primary" />
                </a>
              ))}

              <div className="grid grid-cols-2">
                {SOCIALS.map((s) => {
                  const Icon = s.label === "Instagram" ? InstagramIcon : TikTokIcon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border-r border-steel-foreground/15 py-6 pr-4 font-medium last:border-r-0 hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                      {s.label}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t-4 border-t-primary bg-steel text-steel-foreground">
        <div className="pointer-events-none absolute inset-0 bg-black/12" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 text-sm sm:grid-cols-3">
          <div>
            <a href="#" className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-sm shadow-black/10">
                <img
                  src="/beniso-logo.png"
                  alt="Logo PT Beniso Makmur Perkasa"
                  className="h-full w-full rounded-full object-contain"
                />
              </span>
              <span className="font-display text-sm font-bold uppercase leading-tight tracking-tight">
                PT Beniso Makmur Perkasa
              </span>
            </a>
            <p className="mt-4 max-w-xs text-steel-foreground/60">
              Distributor kebutuhan fabrikasi, konstruksi, dan pengolahan material sejak 2020.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-steel-foreground/50">
              Navigasi
            </p>
            <ul className="mt-4 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-steel-foreground/80 transition-colors hover:text-primary"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-steel-foreground/50">
              Kontak
            </p>
            <ul className="mt-4 space-y-3">
              <li className="text-steel-foreground/80">
                Jl. Amir Hamzah, Pagadungan, Kel. Sertajaya, Kec. Cikarang Timur
              </li>
              <li>
                <a
                  href="tel:+6281213612974"
                  className="text-steel-foreground/80 transition-colors hover:text-primary"
                >
                  +62 812-1361-2974
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@beniso.co.id"
                  className="text-steel-foreground/80 transition-colors hover:text-primary"
                >
                  info@beniso.co.id
                </a>
              </li>
              <li>
                <a
                  href={SOCIALS[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-steel-foreground/80 transition-colors hover:text-primary"
                >
                  Instagram @beniso.perkasa
                </a>
              </li>
              <li>
                <a
                  href={SOCIALS[1].href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-steel-foreground/80 transition-colors hover:text-primary"
                >
                  Tiktok @beniso.perkasa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative border-t border-steel-foreground/15">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 font-mono text-[11px] uppercase tracking-[0.1em] text-steel-foreground/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} PT Beniso Makmur Perkasa. All rights reserved.</p>
            <p>Est. 2020 - Cikarang Timur, Indonesia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}