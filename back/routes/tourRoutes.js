import express from "express";
import Tour from "../models/Tour.js";
import protectAdmin from "../middlewares/adminMiddleware.js"; // admin üçün qoruma

const router = express.Router();

// 🔹 Get all tours (public)
router.get("/", async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 🔹 Get tour by ID (public)
router.get("/:id", async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) return res.status(404).json({ message: "Tour not found" });
    res.json(tour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 🔹 Create new tour (protected - admin)
router.post("/", protectAdmin, async (req, res) => {
  try {
    const tour = await Tour.create(req.body);
    res.status(201).json(tour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 🔹 Update tour (protected - admin)
router.put("/:id", protectAdmin, async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tour) return res.status(404).json({ message: "Tour not found" });
    res.json(tour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 🔹 Delete tour (protected - admin)
router.delete("/:id", protectAdmin, async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    if (!tour) return res.status(404).json({ message: "Tour not found" });
    res.json({ message: "Tour deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
