import express from "express";
import { login, register, loadUser } from "../controllers/auth.js";

const router = express.Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/me").post(loadUser);

export default router;
