import express from "express";
import { signupController } from "../controllers/signup.controller";
import { loginController } from "../controllers/login.controller";
const router = express.Router();

router.post("/signup", signupController);
router.post("/login", loginController);

export { router };
