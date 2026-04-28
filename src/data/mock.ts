import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";

export const galleryImages = [g1, g2, g3, g4, g1, g2];

export const initialServices = [
  { id: 1, name: "Hair Cut", price: 150, duration: "30 min", desc: "Trendy and classic styles by expert stylists." },
  { id: 2, name: "Beard Trim & Shave", price: 100, duration: "20 min", desc: "Sharp beard styling with hot towel finish." },
  { id: 3, name: "Hair Color", price: 800, duration: "60 min", desc: "Premium ammonia-free coloring." },
  { id: 4, name: "Head Massage", price: 250, duration: "25 min", desc: "Relaxing oil massage for stress relief." },
  { id: 5, name: "Facial & Cleanup", price: 600, duration: "45 min", desc: "Glow-boosting facial with herbal products." },
  { id: 6, name: "Hair Spa", price: 700, duration: "50 min", desc: "Deep conditioning for smooth, healthy hair." },
];

export const initialBookings = [
  { id: 1, name: "Rahul Sharma", phone: "9876543210", service: "Hair Cut", date: "2026-04-29", time: "11:00" },
  { id: 2, name: "Amit Verma", phone: "9123456789", service: "Beard Trim & Shave", date: "2026-04-30", time: "14:30" },
  { id: 3, name: "Vikas Singh", phone: "9988776655", service: "Hair Spa", date: "2026-05-01", time: "16:00" },
];

export const SALON = {
  name: "Agra Hair Cutting Salon",
  address: "Ghatia Ajam Kha, Pitam Puri Building, City Station Rd, Maithan, Civil Lines, Agra, Uttar Pradesh, 282003",
  phone: "09897627931",
};
