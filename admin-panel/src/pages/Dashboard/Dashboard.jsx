import { useEffect, useState } from "react";
import api from "../../services/api";
import StatsCard from "../../components/StatsCard";

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api.get("/admin/stats")
      .then(res => setStats(res.data))
      .catch(err => console.log(err));
  }, []);

  if (!stats) return <p>Loading stats...</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <StatsCard title="Total Users" value={stats.totalUsers} />
      <StatsCard title="Total Reservations" value={stats.totalReservations} />
      <StatsCard title="Revenue" value={`$${stats.revenue}`} />
      <StatsCard title="Discounted Revenue" value={`$${stats.discountedRevenue}`} />
      <StatsCard title="Active Tours" value={stats.activeTours} />
    </div>
  );
}
