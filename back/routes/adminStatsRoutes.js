import express from "express";
import { getAdminStats } from "../controllers/adminStatsController.js";
import protectAdmin from "../middlewares/adminMiddleware.js";

const router = express.Router();

router.get("/", protectAdmin, getAdminStats);

export default router;
