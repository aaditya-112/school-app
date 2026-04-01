import express from "express";
import { login, logout, newUser } from "../controllers/auth.Controllers.js";

const router = express.Router();

router.post("/newUser",newUser);
router.post("/login",login);
router.post("/logout",logout);

export default router;