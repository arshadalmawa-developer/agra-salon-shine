import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";

const links = [
  { to: "/admin", label: "Dashboard", end: true },
  { to: "/admin/services", label: "Services" },
  { to: "/admin/bookings", label: "Bookings" },
  { to: "/admin/gallery", label: "Gallery" },
];

export default function AdminLayout() {
  const navigate = useNavigate();
  const auth = sessionStorage.getItem("admin_auth") === "1";
  if (!auth) return <Navigate to="/admin/login" replace />;

  const logout = () => { sessionStorage.removeItem("admin_auth"); navigate("/admin/login"); };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-muted">
      <aside className="md:w-64 text-white p-6 md:min-h-screen" style={{ background: "var(--gradient-hero)" }}>
        <h1 className="text-xl font-bold mb-1">Agra Salon</h1>
        <p className="text-xs opacity-80 mb-8">Admin Panel</p>
        <nav className="flex md:flex-col gap-2 flex-wrap">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => `px-4 py-2 rounded-lg text-sm font-medium transition ${isActive ? "bg-white text-brand" : "hover:bg-white/15"}`}>{l.label}</NavLink>
          ))}
        </nav>
        <button onClick={logout} className="mt-8 w-full px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-semibold">Logout</button>
      </aside>
      <main className="flex-1 p-6 md:p-10">
        <Outlet />
      </main>
    </div>
  );
}
