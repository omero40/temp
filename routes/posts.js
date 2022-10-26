import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
  addTemp,
  addTempi,
} from "../controller/post.js";

const router = express.Router();

router.get("/", addTempi);
router.post("/temp", addTemp);

export default router;
