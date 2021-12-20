import asyncHandler from "express-async-handler";
import Product from "../models/Product.js";
import fs from "fs";
import path from "path";

//@desc    Get all products
//@method  GET
//@access  public
export const getProducts = asyncHandler(async (req, res, next) => {
	const keyword = req.query.keyword
		? {
				name: {
					$regex: req.query.keyword,
					$options: "i",
				},
		  }
		: {};

	const products = await Product.find({ ...keyword });
	res.status(200).json({ success: true, data: products });
});

//@desc    Get single product
//@method  GET
//@access  public
export const getProduct = asyncHandler(async (req, res, next) => {
	const product = await Product.findById(req.params.id);
	if (!product) {
		throw new Error(`No product with id ${req.params.id}`);
	}
	res.status(200).json({ success: true, data: product });
});

//@desc    Add new product
//@method  POST
//@access  private
export const addProduct = asyncHandler(async (req, res, next) => {
	const content = req.body.content ? JSON.parse(req.body.content) : req.body;
	content.user = req.user.name;
	if (req.file?.filename) {
		content.img = `/${req.file?.filename}`;
	} else {
		delete content.img;
	}

	const product = await Product.create(content);
	res.status(201).json({ success: true, data: product });
});

//@desc    Delete product
//@method  DELETE /products/:id
//@access  private admin only
export const deleteProduct = asyncHandler(async (req, res, next) => {
	await Product.findByIdAndDelete(req.params.id);
	res.status(200).json({ success: true, data: {} });
});

//@desc    Update product
//@method  PUT api/products/:id
//@access  private admin only
export const updateProduct = asyncHandler(async (req, res, next) => {
	const content = req.body.content ? JSON.parse(req.body.content) : req.body;
	if (req.file?.filename) {
		// Delete previous image
		const __dirname = path.resolve();
		const oldImgfilePath = path.join(__dirname, "public", content.img);
		fs.unlink(oldImgfilePath, err => {
			if (err) {
				console.log(err.message);
			}
			console.log("File deleted");
		});
		content.img = `/${req.file?.filename}`;
	}

	const updatedProduct = await Product.findByIdAndUpdate(
		req.params.id,
		content,
		{ runValidators: true, new: true }
	);

	if (!updatedProduct) {
		res.status(404);
		throw new Error(`No product with id ${req.params.id}`);
	}

	res.status(200).json({ success: true, data: updatedProduct });
});
