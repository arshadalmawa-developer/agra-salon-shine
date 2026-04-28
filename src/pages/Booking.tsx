import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import { initialServices } from "@/data/mock";

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: initialServices[0].name, date: "", time: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container py-16">
      <SectionHeader eyebrow="Appointment" title="Book Your Slot" subtitle="Fill in details — we'll confirm via call." />
      <div className="max-w-xl mx-auto bg-card rounded-2xl p-8 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
        {submitted ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-3">✅</div>
            <h3 className="text-2xl font-bold text-plum">Booking Received!</h3>
            <p className="text-muted-foreground mt-2">Thanks {form.name}. We will call {form.phone} to confirm.</p>
            <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", service: initialServices[0].name, date: "", time: "" }); }} className="mt-6 px-6 py-2 rounded-full bg-brand text-brand-foreground font-semibold">New Booking</button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <Field label="Full Name"><input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand" /></Field>
            <Field label="Phone"><input required type="tel" pattern="[0-9]{10}" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand" /></Field>
            <Field label="Service">
              <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand">
                {initialServices.map((s) => <option key={s.id}>{s.name}</option>)}
              </select>
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Date"><input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand" /></Field>
              <Field label="Time"><input required type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand" /></Field>
            </div>
            <button className="w-full py-3 rounded-full text-white font-bold hover:scale-[1.02] transition-transform" style={{ background: "var(--gradient-hero)" }}>Confirm Booking</button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-plum mb-1.5">{label}</span>
      {children}
    </label>
  );
}
