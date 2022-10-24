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

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/post", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);
router.post("/temp", addTemp);
router.get("/tempi", addTempi);

export default router;
