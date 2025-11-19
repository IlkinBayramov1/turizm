import api from "./api";

const getAllReservations = async () => {
  const res = await api.get("/reservations");
  return res.data;
};

const updateReservationStatus = async (id, status) => {
  const res = await api.put(`/reservations/${id}/status`, { status });
  return res.data;
};

const deleteReservation = async (id) => {
  const res = await api.delete(`/reservations/${id}`);
  return res.data;
};

export default {
  getAllReservations,
  updateReservationStatus,
  deleteReservation,
};
