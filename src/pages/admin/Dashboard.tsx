import { initialBookings, initialServices, galleryImages } from "@/data/mock";

export default function Dashboard() {
  const stats = [
    { label: "Total Services", value: initialServices.length, color: "bg-brand" },
    { label: "Bookings Today", value: initialBookings.length, color: "bg-plum" },
    { label: "Gallery Images", value: galleryImages.length, color: "bg-gold" },
    { label: "Revenue (₹)", value: initialBookings.length * 350, color: "bg-brand" },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold text-plum mb-2">Welcome back 👋</h1>
      <p className="text-muted-foreground mb-8">Here's what's happening at your salon today.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s) => (
          <div key={s.label} className="bg-card rounded-xl p-5 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className={`w-10 h-10 rounded-lg ${s.color} mb-3`} />
            <p className="text-sm text-muted-foreground">{s.label}</p>
            <p className="text-2xl font-bold text-plum mt-1">{s.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 bg-card rounded-xl p-6 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
        <h2 className="text-lg font-bold text-plum mb-4">Recent Bookings</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted-foreground border-b border-border">
                <th className="py-2">Name</th><th>Service</th><th>Date</th><th>Time</th>
              </tr>
            </thead>
            <tbody>
              {initialBookings.map((b) => (
                <tr key={b.id} className="border-b border-border last:border-0">
                  <td className="py-3 font-medium text-plum">{b.name}</td>
                  <td>{b.service}</td><td>{b.date}</td><td>{b.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
