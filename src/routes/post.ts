import express from "express";
import { postController } from "../controllers/post.controller";
import { createPostController } from "../controllers/createPostController";
const router = express.Router();

router.post("/", postController);
router.post("/create", createPostController);

export { router };
