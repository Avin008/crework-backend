import express from "express";
import { postController } from "../controllers/post.controller";
const router = express.Router();

router.post("/", postController);

export { router };
