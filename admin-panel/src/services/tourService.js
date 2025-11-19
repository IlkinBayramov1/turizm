import api from "./api";

const getAllTours = async () => {
  const res = await api.get("/tours");
  return res.data;
};

const getTourById = async (id) => {
  const res = await api.get(`/tours/${id}`);
  return res.data;
};

const createTour = async (tourData) => {
  const res = await api.post("/tours", tourData);
  return res.data;
};

const updateTour = async (id, tourData) => {
  const res = await api.put(`/tours/${id}`, tourData);
  return res.data;
};

const deleteTour = async (id) => {
  const res = await api.delete(`/tours/${id}`);
  return res.data;
};

export default {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};
