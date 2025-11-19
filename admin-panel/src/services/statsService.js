import api from "./api";

// Dashboard üçün admin statistikaları gətirir
const getStats = async () => {
  const res = await api.get("/admin/stats");
  return res.data;
};

export default {
  getStats,
};
