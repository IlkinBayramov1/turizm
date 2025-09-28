import Reservation from "../models/Reservation.js";
import Tour from "../models/Tour.js";

// 🔹 Yeni rezervasiya yarat
export const createReservation = async (req, res) => {
  try {
    const { tourId, customer, seats, payment } = req.body;

    // Tour yoxla
    const tour = await Tour.findById(tourId);
    if (!tour) return res.status(404).json({ message: "Tour not found" });

    // Mövcud oturacaq sayı kifayət qədər olmalıdır
    if (tour.availableSeats < seats) {
      return res.status(400).json({ message: "Not enough seats available" });
    }

    // Rezervasiyanı yarat
    const reservation = await Reservation.create({
      user: req.user ? req.user._id : null,
      tourId,
      customer,
      seats,
      payment,
      status: "in_progress",
    });

    // Tour availableSeats azaldırıq
    tour.availableSeats -= seats;
    await tour.save();

    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 İstifadəçinin öz rezervasiyaları
export const getMyReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find({ user: req.user._id }).populate("tourId");
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Admin bütün rezervasiyaları görə bilir
export const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find()
      .populate("tourId")
      .populate("user", "firstName lastName email");
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Rezervasiya statusunu dəyiş
export const updateReservationStatus = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) return res.status(404).json({ message: "Reservation not found" });

    reservation.status = req.body.status || reservation.status;
    reservation.payment.status = req.body.paymentStatus || reservation.payment.status;
    if (req.body.paymentStatus === "paid") {
      reservation.payment.paidAt = Date.now();
    }

    await reservation.save();
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Rezervasiyanı sil
export const deleteReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) return res.status(404).json({ message: "Reservation not found" });

    if (reservation.user && reservation.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await reservation.deleteOne();

    // Oturacaqları geri qaytar
    const tour = await Tour.findById(reservation.tourId);
    if (tour) {
      tour.availableSeats += reservation.seats;
      await tour.save();
    }

    res.json({ message: "Reservation deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
