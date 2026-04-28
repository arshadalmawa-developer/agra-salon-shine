export default function SectionHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10">
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-2">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-bold text-plum">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
