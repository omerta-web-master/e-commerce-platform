import express from "express";
import {
	addOrder,
	getOrder,
	getOrders,
	payOrder,
	updateOrder,
} from "../controllers/orders.js";
import { adminOnly, protect } from "../middleware/auth.js";

const router = express.Router({ mergeParams: true });

router.route("/").post(protect, addOrder).get(protect, getOrders);
router
	.route("/:id")
	.get(protect, getOrder)
	.put(protect, adminOnly, updateOrder);
router.route("/:id/pay").post(protect, payOrder);

export default router;
