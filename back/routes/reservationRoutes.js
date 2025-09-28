import express from "express";
import protect from "../middlewares/authMiddleware.js";
import {
  createReservation,
  getMyReservations,
  getAllReservations,
  updateReservationStatus,
  deleteReservation,
} from "../controllers/reservationController.js";

const router = express.Router();

// 🔹 Yeni rezervasiya
router.post("/", createReservation);

// 🔹 İstifadəçinin öz rezervasiyaları (login tələb olunur)
router.get("/my", protect, getMyReservations);

// 🔹 Admin bütün rezervasiyaları görə bilir
router.get("/", getAllReservations);

// 🔹 Rezervasiya statusunu dəyiş
router.put("/:id/status", updateReservationStatus);

// 🔹 Rezervasiyanı sil
router.delete("/:id", protect, deleteReservation);

export default router;
