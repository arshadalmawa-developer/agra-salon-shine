import SectionHeader from "@/components/SectionHeader";
import { initialServices } from "@/data/mock";

export default function Services() {
  return (
    <div className="container py-16">
      <SectionHeader eyebrow="Pricing" title="Our Services" subtitle="Transparent pricing, premium quality." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initialServices.map((s) => (
          <div key={s.id} className="bg-card rounded-2xl p-6 border border-border hover:-translate-y-1 transition-transform" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-plum">{s.name}</h3>
              <span className="px-3 py-1 rounded-full bg-brand text-brand-foreground text-sm font-bold">₹{s.price}</span>
            </div>
            <p className="text-muted-foreground text-sm mt-3">{s.desc}</p>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-gold font-semibold">⏱ {s.duration}</span>
              <a href="/booking" className="text-brand font-semibold hover:underline">Book →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
