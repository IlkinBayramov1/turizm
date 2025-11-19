import { useEffect, useState } from "react";
import api from "../../services/api";
import StatsCard from "../../components/StatsCard";

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get("/admin/stats");
        setStats(res.data);
      } catch (err) {
        console.error(err);
        setError("Statistika yüklənmədi!");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return <p>Loading stats...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  const cards = [
    { title: "Total Users", value: stats.totalUsers },
    { title: "Total Reservations", value: stats.totalReservations },
    { title: "Revenue", value: `$${stats.revenue}` },
    { title: "Discounted Revenue", value: `$${stats.discountedRevenue}` },
    { title: "Active Tours", value: stats.activeTours },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {cards.map((card, idx) => (
        <StatsCard key={idx} title={card.title} value={card.value} />
      ))}
    </div>
  );
}
