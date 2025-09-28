import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

// Generate JWT helper
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "supersecretkey", {
    expiresIn: "1d",
  });
};

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ firstName, lastName, email, password, phone });

    res.status(201).json({
      message: "User registered successfully",
      token: generateToken(user._id),
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      token: generateToken(user._id),
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PROFILE (token tələb edir)
router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

export default router;
