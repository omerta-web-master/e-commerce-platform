import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		rating: { type: Number, required: true },
		comment: { type: String, required: true },
	},
	{ timestamps: true }
);

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	user: {
		// type: mongoose.Schema.ObjectId,
		// required: true,
		// ref: "User",
		type: String,
	},
	price: {
		type: String,
		required: true,
		defualt: 0,
	},
	brand: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		enum: ["sneakers"],
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	reviews: [reviewSchema],
	rating: {
		type: Number,
		required: true,
		default: 0,
	},
	countInStock: {
		type: String,
		required: true,
		default: 0,
	},
	img: {
		type: String,
		required: true,
		default: "/default-image.jpg",
	},
	numReviews: {
		type: Number,
		required: true,
		default: 0,
	},
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
