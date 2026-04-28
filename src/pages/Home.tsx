import { Link } from "react-router-dom";
import hero from "@/assets/hero-salon.jpg";
import SectionHeader from "@/components/SectionHeader";
import { initialServices, galleryImages } from "@/data/mock";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Agra Salon interior" className="w-full h-full object-cover" width={1536} height={1024} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(285 55% 18% / 0.85), hsl(330 75% 40% / 0.65))" }} />
        </div>
        <div className="container relative py-24 md:py-32 text-white">
          <p className="uppercase tracking-[0.3em] text-gold text-xs md:text-sm font-semibold mb-4">Premium Grooming • Agra</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl">Style That Speaks Before You Do.</h1>
          <p className="mt-5 max-w-xl text-white/90 text-lg">Expert haircuts, beard styling, hair spa & more — crafted by Agra's finest stylists.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/booking" className="px-7 py-3 rounded-full bg-brand text-brand-foreground font-semibold hover:scale-105 transition-transform shadow-lg">Book Appointment</Link>
            <Link to="/services" className="px-7 py-3 rounded-full bg-white/10 backdrop-blur border border-white/30 text-white font-semibold hover:bg-white/20 transition">View Services</Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-16 grid md:grid-cols-3 gap-6">
        {[
          { t: "Expert Stylists", d: "10+ years of professional experience.", i: "✂️" },
          { t: "Hygienic Tools", d: "Sanitized equipment for every client.", i: "🧴" },
          { t: "Affordable Pricing", d: "Premium quality at reasonable rates.", i: "💎" },
        ].map((f) => (
          <div key={f.t} className="rounded-2xl p-6 bg-card border border-border hover:-translate-y-1 transition-transform" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="text-4xl mb-3">{f.i}</div>
            <h3 className="font-bold text-plum text-lg">{f.t}</h3>
            <p className="text-muted-foreground mt-2 text-sm">{f.d}</p>
          </div>
        ))}
      </section>

      {/* Services preview */}
      <section className="py-16" style={{ background: "var(--gradient-soft)" }}>
        <div className="container">
          <SectionHeader eyebrow="What We Offer" title="Popular Services" subtitle="Pamper yourself with our most-loved treatments." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {initialServices.slice(0, 6).map((s) => (
              <div key={s.id} className="bg-card rounded-2xl p-6 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-plum text-lg">{s.name}</h3>
                  <span className="text-brand font-bold">₹{s.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">{s.desc}</p>
                <p className="text-xs text-gold font-semibold mt-3">⏱ {s.duration}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-block px-6 py-3 rounded-full bg-plum text-plum-foreground font-semibold hover:bg-brand transition">See All Services</Link>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="container py-16">
        <SectionHeader eyebrow="Our Work" title="Inside The Salon" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.slice(0, 6).map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl aspect-square">
              <img src={src} alt={`Salon work ${i + 1}`} loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-16">
        <div className="rounded-3xl p-10 md:p-14 text-center text-white" style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elegant)" }}>
          <h2 className="text-3xl md:text-4xl font-bold">Ready For A New Look?</h2>
          <p className="mt-3 opacity-90">Book your slot today — limited seats every day.</p>
          <Link to="/booking" className="mt-6 inline-block px-8 py-3 rounded-full bg-white text-brand font-bold hover:scale-105 transition-transform">Book Now</Link>
        </div>
      </section>
    </div>
  );
}
