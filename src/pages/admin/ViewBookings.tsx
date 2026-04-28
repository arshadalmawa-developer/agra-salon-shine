import { useState } from "react";
import { initialBookings } from "@/data/mock";

export default function ViewBookings() {
  const [bookings, setBookings] = useState(initialBookings);
  const remove = (id: number) => setBookings(bookings.filter((b) => b.id !== id));

  return (
    <div>
      <h1 className="text-3xl font-bold text-plum mb-6">Bookings</h1>
      <div className="bg-card rounded-xl border border-border overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr className="text-left text-plum">
                <th className="px-4 py-3">Customer</th><th>Phone</th><th>Service</th><th>Date</th><th>Time</th><th></th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id} className="border-t border-border">
                  <td className="px-4 py-3 font-medium text-plum">{b.name}</td>
                  <td>{b.phone}</td><td>{b.service}</td><td>{b.date}</td><td>{b.time}</td>
                  <td className="px-4"><button onClick={() => remove(b.id)} className="text-destructive font-semibold text-xs">Cancel</button></td>
                </tr>
              ))}
              {bookings.length === 0 && <tr><td colSpan={6} className="text-center py-10 text-muted-foreground">No bookings</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
