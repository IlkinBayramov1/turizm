export default function StatsCard({ title, value }) {
  return (
    <div style={{
      background: "#f5f5f5",
      padding: "15px",
      borderRadius: "8px",
      margin: "10px",
      textAlign: "center"
    }}>
      <h4>{title}</h4>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>{value}</p>
    </div>
  );
}
