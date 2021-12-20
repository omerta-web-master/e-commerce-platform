import asyncHandler from "express-async-handler";
import Order from "../models/Order.js";

//@desc    Create new order
//@route   POST /api/orders
//@access  public
export const addOrder = asyncHandler(async (req, res, next) => {
	const {
		orderItems,
		shippingAddress,
		paymentMethod,
		itemsPrice,
		taxPrice,
		shippingPrice,
		totalPrice,
	} = req.body;

	if (orderItems && orderItems.length === 0) {
		res.status(400);
		throw new Error("No order items");
	}

	const newOrder = {
		user: req.user._id,
		orderItems,
		shippingAddress,
		paymentMethod,
		itemsPrice,
		taxPrice,
		shippingPrice,
		totalPrice,
	};
	const createdOrder = await Order.create(newOrder);

	res.status(200).json({ success: true, data: createdOrder });
});

//@desc    Get single order
//@route   GET /api/orders/:id
//@access  Private
export const getOrder = asyncHandler(async (req, res, next) => {
	const order = await Order.findById(req.params.id);
	if (!order) {
		res.status(404);
		throw new Error(`No order with id ${req.params.id}`);
	}
	res.status(200).json({ success: true, data: order });
});

//@desc    Get all orders
//@route   GET /api/orders
//@route   GET /api/users/:id/orders
//@access  Private
export const getOrders = asyncHandler(async (req, res, next) => {
	let orders;

	if (req.params.id) {
		orders = await Order.find({ user: req.params.id });
	} else {
		orders = await Order.find({});
	}

	res.status(200).json({ success: true, data: orders });
});

//@desc    Update order to paid
//@route   POST /api/orders/:id/pay
//@access  Private
export const payOrder = asyncHandler(async (req, res, next) => {
	const order = await Order.findById(req.params.id);

	if (!order) {
		res.status(404);
		throw new Error("Order not found");
	}

	// Check to see if the order belongs to the current logged in user or admin
	if (
		order.user.toString() !== req.user._id.toString() &&
		req.user.isAdmin !== true
	) {
		res.status(401);
		throw new Error("Not authorized");
	}

	order.isPaid = true;
	order.paidAt = Date.now();
	order.paymentResult = req.body;

	const updatedOrder = await order.save();
	res.status(200).json({ success: true, data: updatedOrder });
});

//@desc    Update order
//@route   PUT /api/orders/:id
//@access  Private admin only
export const updateOrder = asyncHandler(async (req, res, next) => {
	const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {
		runValidators: true,
		new: true,
	});

	if (!updatedOrder) {
		res.status(404);
		throw new Error(`No order with id ${req.params.id}`);
	}

	res.status(200).json({ success: true, data: updatedOrder });
});
