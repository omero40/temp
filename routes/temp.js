import express from "express";
import { addTemp } from "../controller/temp.js";

const router = express.Router();

router.post("/", addTemp);

export default router;
