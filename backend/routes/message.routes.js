import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { sendMessage } from "../controllers/message.controller.js";
import { getMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessage);

export default router;
