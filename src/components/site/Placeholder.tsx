type PlaceholderProps = {
  label: string;
  className?: string;
  ratio?: string;
};

/**
 * Visual stand-in for assets that are not available yet (foto proyek, logo klien,
 * scan sertifikat). Replace with a real <img> once the files exist.
 */
export function Placeholder({ label, className = "", ratio = "4 / 3" }: PlaceholderProps) {
  return (
    <div
      style={{ aspectRatio: ratio }}
      className={`relative flex items-center justify-center overflow-hidden rounded-sm border border-dashed border-border bg-secondary ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--muted-foreground) 0 1px, transparent 1px 10px)",
        }}
      />
      <span className="relative px-3 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
