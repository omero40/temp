import express from "express";
import { login, logout, registreer } from "../controller/auth.js";

const router = express.Router();

router.post("/registreer", registreer);
router.post("/login", login);
router.post("/logout", logout);

export default router;
