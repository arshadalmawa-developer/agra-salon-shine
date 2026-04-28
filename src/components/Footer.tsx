import { useLocation } from "react-router-dom";
import { SALON } from "@/data/mock";

export default function Footer() {
  const { pathname } = useLocation();
  if (pathname.startsWith("/admin")) return null;
  return (
    <footer className="mt-20 text-plum-foreground" style={{ background: "var(--gradient-hero)" }}>
      <div className="container py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-3">{SALON.name}</h3>
          <p className="text-sm opacity-90">Premium grooming experience in the heart of Agra. Walk in stylish, walk out spectacular.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Visit Us</h4>
          <p className="text-sm opacity-90">{SALON.address}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm opacity-90">📞 {SALON.phone}</p>
          <p className="text-sm opacity-90 mt-2">Open: 9:00 AM – 9:00 PM</p>
        </div>
      </div>
      <div className="border-t border-white/20 py-4 text-center text-xs opacity-80">
        © {new Date().getFullYear()} {SALON.name}. All rights reserved.
      </div>
    </footer>
  );
}
