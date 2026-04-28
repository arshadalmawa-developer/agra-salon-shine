import { useState } from "react";
import { galleryImages } from "@/data/mock";

export default function ManageGallery() {
  const [images, setImages] = useState<string[]>(galleryImages);
  const [url, setUrl] = useState("");

  const add = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) { setImages([url.trim(), ...images]); setUrl(""); }
  };
  const remove = (i: number) => setImages(images.filter((_, idx) => idx !== i));

  return (
    <div>
      <h1 className="text-3xl font-bold text-plum mb-6">Manage Gallery</h1>
      <form onSubmit={add} className="flex gap-2 mb-6">
        <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Paste image URL..." className="flex-1 px-4 py-2 rounded-lg border border-border bg-background" />
        <button className="px-5 py-2 rounded-full bg-brand text-brand-foreground font-semibold">Add</button>
      </form>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <div key={i} className="relative group rounded-xl overflow-hidden aspect-square">
            <img src={src} alt={`g${i}`} loading="lazy" className="w-full h-full object-cover" />
            <button onClick={() => remove(i)} className="absolute top-2 right-2 px-2 py-1 rounded-full bg-destructive text-destructive-foreground text-xs font-bold opacity-0 group-hover:opacity-100 transition">✕</button>
          </div>
        ))}
      </div>
    </div>
  );
}
