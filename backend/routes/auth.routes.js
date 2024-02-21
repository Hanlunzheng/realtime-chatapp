import express, { Router } from "express";
import { login } from "../controllers/auth.controller.js";
import { signup } from "../controllers/auth.controller.js";
import { logout } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", login);
router.post("/logout", logout);

export default router;
