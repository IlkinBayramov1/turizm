import express from "express";
import protect from "../middlewares/authMiddleware.js";
import protectAdmin from "../middlewares/adminMiddleware.js"; // 🔸 Admin yoxlaması (əgər varsa)
import {
  createReservation,
  getMyReservations,
  getAllReservations,
  updateReservationStatus,
  deleteReservation,
} from "../controllers/reservationController.js";

const router = express.Router();

// 🔹 Yeni rezervasiya (login tələb olunur)
router.post("/", protect, createReservation);

// 🔹 İstifadəçinin öz rezervasiyaları
router.get("/my", protect, getMyReservations);

// 🔹 Admin bütün rezervasiyaları görə bilir
router.get("/", protect, protectAdmin, getAllReservations);

// 🔹 Rezervasiya statusunu dəyişmək (yalnız admin)
router.put("/:id/status", protect, protectAdmin, updateReservationStatus);

// 🔹 Rezervasiyanı sil (öz rezervasiyasını silə bilər, admin hamısını)
router.delete("/:id", protect, deleteReservation);

export default router;
