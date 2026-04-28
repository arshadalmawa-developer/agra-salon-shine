import SectionHeader from "@/components/SectionHeader";
import { galleryImages } from "@/data/mock";

export default function Gallery() {
  return (
    <div className="container py-16">
      <SectionHeader eyebrow="Gallery" title="Moments From Our Salon" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-xl aspect-square group">
            <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
}
