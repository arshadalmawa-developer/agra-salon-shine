import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@agraSalon.com" && password === "admin123") {
      sessionStorage.setItem("admin_auth", "1");
      navigate("/admin");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen grid place-items-center px-4" style={{ background: "var(--gradient-soft)" }}>
      <div className="w-full max-w-md bg-card rounded-2xl p-8 border border-border" style={{ boxShadow: "var(--shadow-elegant)" }}>
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto rounded-full grid place-items-center text-white font-bold text-2xl" style={{ background: "var(--gradient-hero)" }}>A</div>
          <h1 className="text-2xl font-bold text-plum mt-3">Admin Login</h1>
          <p className="text-sm text-muted-foreground">Agra Salon Dashboard</p>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand" />
          <input type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand" />
          {error && <p className="text-destructive text-sm">{error}</p>}
          <button className="w-full py-3 rounded-full text-white font-bold" style={{ background: "var(--gradient-hero)" }}>Login</button>
        </form>
        <div className="mt-5 p-3 rounded-lg bg-muted text-xs text-center">
          <p className="font-semibold text-plum">Demo Credentials</p>
          <p className="text-muted-foreground mt-1">admin@agraSalon.com / admin123</p>
        </div>
      </div>
    </div>
  );
}
