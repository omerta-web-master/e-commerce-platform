import express from "express";
import { protect, adminOnly } from "../middleware/auth.js";
import {
	getUsers,
	getUser,
	updateUser,
	deleteUser,
} from "../controllers/users.js";

const router = express.Router();

// Reroute to other resource routers
import ordersRouter from "./orders.js";
router.use("/:id/orders", ordersRouter);

router.route("/").get(protect, adminOnly, getUsers);

router
	.route("/:id")
	.get(protect, adminOnly, getUser)
	.put(protect, adminOnly, updateUser)
	.delete(protect, adminOnly, deleteUser);

export default router;
