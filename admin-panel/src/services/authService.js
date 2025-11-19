import api from "./api";

// Admin login
const loginAdmin = async (credentials) => {
  const res = await api.post("/admin/login", credentials);
  return res.data;
};

// Admin register (əgər lazım olarsa)
const registerAdmin = async (data) => {
  const res = await api.post("/admin/register", data);
  return res.data;
};

export default {
  loginAdmin,
  registerAdmin,
};
