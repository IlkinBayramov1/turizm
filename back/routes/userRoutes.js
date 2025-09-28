import express from "express";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Profile route (token tələb edir)
router.get("/profile", protect, async (req, res) => {
  if (!req.user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(req.user);
});

export default router;
