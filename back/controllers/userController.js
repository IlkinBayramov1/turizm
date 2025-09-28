import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// @desc    Register new user
// @route   POST /api/users/register
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, phone } = req.body;

  if (!email || !password) {
    res.status(400);    
    throw new Error("Email və şifrə tələb olunur");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("Bu email artıq istifadə olunub");
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    phone
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken({ id: user._id, role: "user" })
    });
  } else {
    res.status(400);
    throw new Error("İstifadəçi yaratmaq alınmadı");
  }
});

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken({ id: user._id, role: "user" })
    });
  } else {
    res.status(401);
    throw new Error("Email və ya şifrə səhvdir");
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select("-password").populate("reservations");
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("İstifadəçi tapılmadı");
  }
});
