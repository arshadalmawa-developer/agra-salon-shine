import { useState } from "react";
import { initialServices } from "@/data/mock";

type Service = typeof initialServices[number];

export default function ManageServices() {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [editing, setEditing] = useState<Service | null>(null);
  const [form, setForm] = useState({ name: "", price: 0, duration: "", desc: "" });

  const startNew = () => { setEditing({ id: 0, name: "", price: 0, duration: "", desc: "" }); setForm({ name: "", price: 0, duration: "", desc: "" }); };
  const startEdit = (s: Service) => { setEditing(s); setForm({ name: s.name, price: s.price, duration: s.duration, desc: s.desc }); };
  const remove = (id: number) => setServices(services.filter((s) => s.id !== id));
  const save = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    if (editing.id === 0) {
      setServices([...services, { ...form, id: Date.now() }]);
    } else {
      setServices(services.map((s) => s.id === editing.id ? { ...s, ...form } : s));
    }
    setEditing(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-plum">Manage Services</h1>
        <button onClick={startNew} className="px-5 py-2 rounded-full bg-brand text-brand-foreground font-semibold">+ Add Service</button>
      </div>

      {editing && (
        <form onSubmit={save} className="bg-card rounded-xl p-5 border border-border mb-6 grid md:grid-cols-2 gap-3" style={{ boxShadow: "var(--shadow-card)" }}>
          <input required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-3 py-2 rounded-lg border border-border bg-background" />
          <input required type="number" placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} className="px-3 py-2 rounded-lg border border-border bg-background" />
          <input required placeholder="Duration (e.g. 30 min)" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} className="px-3 py-2 rounded-lg border border-border bg-background" />
          <input required placeholder="Description" value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} className="px-3 py-2 rounded-lg border border-border bg-background" />
          <div className="md:col-span-2 flex gap-3">
            <button className="px-5 py-2 rounded-full bg-plum text-plum-foreground font-semibold">{editing.id === 0 ? "Create" : "Update"}</button>
            <button type="button" onClick={() => setEditing(null)} className="px-5 py-2 rounded-full bg-muted font-semibold">Cancel</button>
          </div>
        </form>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <div key={s.id} className="bg-card rounded-xl p-5 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="flex items-start justify-between">
              <h3 className="font-bold text-plum">{s.name}</h3>
              <span className="text-brand font-bold">₹{s.price}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
            <p className="text-xs text-gold font-semibold mt-2">⏱ {s.duration}</p>
            <div className="mt-4 flex gap-2">
              <button onClick={() => startEdit(s)} className="px-3 py-1.5 text-xs rounded-full bg-plum text-plum-foreground font-semibold">Edit</button>
              <button onClick={() => remove(s.id)} className="px-3 py-1.5 text-xs rounded-full bg-destructive text-destructive-foreground font-semibold">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
