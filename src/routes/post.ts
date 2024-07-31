import express from "express";
import { getPostController } from "../controllers/getPost.controller";
const router = express.Router();

router.post("/", getPostController);

export { router };
