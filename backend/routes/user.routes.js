import protectRoute from "../middleware/protectRoute.js";

import express from "express";

import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);

export default router;
