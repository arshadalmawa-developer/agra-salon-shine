import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/booking", label: "Book Now" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  if (pathname.startsWith("/admin")) return null;

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/80 border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full grid place-items-center text-brand-foreground font-bold" style={{ background: "var(--gradient-hero)" }}>A</div>
          <span className="font-bold text-plum text-lg leading-tight">Agra Salon</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? "text-brand" : "text-foreground hover:text-brand"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/admin/login" className="text-sm font-semibold text-plum hover:text-brand">Admin</Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="menu">
          <div className="w-6 h-0.5 bg-foreground mb-1.5" />
          <div className="w-6 h-0.5 bg-foreground mb-1.5" />
          <div className="w-6 h-0.5 bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-3 flex flex-col gap-3">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={() => setOpen(false)} className="py-1 text-foreground hover:text-brand">{l.label}</NavLink>
            ))}
            <Link to="/admin/login" onClick={() => setOpen(false)} className="py-1 font-semibold text-plum">Admin</Link>
          </div>
        </div>
      )}
    </header>
  );
}
