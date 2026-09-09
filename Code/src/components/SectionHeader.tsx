type SectionHeaderProps = {
  number?: string;
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeader({
  number,
  label,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const mutedClass = dark ? "text-white/60" : "text-ink-faint";
  const titleClass = dark ? "text-white" : "text-ink";
  const descClass = dark ? "text-white/70" : "text-ink-muted";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        {number && (
          <span className={`font-display text-4xl font-light ${mutedClass}`}>{number}</span>
        )}
        <span className={`text-xs font-medium uppercase tracking-[0.25em] ${mutedClass}`}>
          {label}
        </span>
      </div>
      <h2 className={`mt-3 font-display text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-6xl ${titleClass}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${descClass}`}>{description}</p>
      )}
    </div>
  );
}
