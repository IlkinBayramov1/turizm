import api from "./api";

const getAllUsers = async () => {
  const res = await api.get("/auth");
  return res.data;
};

const deleteUser = async (id) => {
  const res = await api.delete(`/auth/${id}`);
  return res.data;
};

export default {
  getAllUsers,
  deleteUser,
};
