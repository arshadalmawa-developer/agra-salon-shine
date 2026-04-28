import SectionHeader from "@/components/SectionHeader";
import { SALON } from "@/data/mock";

export default function Contact() {
  return (
    <div className="container py-16">
      <SectionHeader eyebrow="Get In Touch" title="Contact Us" />
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-card rounded-2xl p-8 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
          <h3 className="text-xl font-bold text-plum mb-4">{SALON.name}</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-plum">📍 Address</p>
              <p className="text-muted-foreground mt-1">{SALON.address}</p>
            </div>
            <div>
              <p className="font-semibold text-plum">📞 Phone</p>
              <a href={`tel:${SALON.phone}`} className="text-brand font-semibold">{SALON.phone}</a>
            </div>
            <div>
              <p className="font-semibold text-plum">🕐 Hours</p>
              <p className="text-muted-foreground mt-1">Mon – Sun: 9:00 AM – 9:00 PM</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-border min-h-[300px]" style={{ boxShadow: "var(--shadow-card)" }}>
          <iframe
            title="map"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(SALON.address)}&output=embed`}
            className="w-full h-full min-h-[300px]"
          />
        </div>
      </div>
    </div>
  );
}
