import express from "express";
import { protect, adminOnly } from "../middleware/auth.js";
import {
	getProducts,
	addProduct,
	getProduct,
	deleteProduct,
	updateProduct,
} from "../controllers/products.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// prettier-ignore
router.route("/")
  .get(getProducts)
  .post(protect, adminOnly,upload.single("image"),addProduct);

router
	.route("/:id")
	.get(getProduct)
	.delete(protect, adminOnly, deleteProduct)
	.put(protect, adminOnly, upload.single("image"), updateProduct);

export default router;
