import express from "express";
import { getPostController } from "../controllers/getPost.controller";
import { createPostController } from "../controllers/createPost.controller";
const router = express.Router();

router.post("/", getPostController);
router.post("/create", createPostController);

export { router };
