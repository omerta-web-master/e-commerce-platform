import User from "../models/User.js";
import asyncHandler from "express-async-handler";

//@desc    Get all users
//@method  GET /api/users
//@access  private, admin only
export const getUsers = asyncHandler(async (req, res, next) => {
	const keyword = req.query.keyword
		? {
				$or: [
					{ name: { $regex: req.query.keyword, $options: "i" } },
					{ email: { $regex: req.query.keyword, $options: "i" } },
				],
		  }
		: {};
	const users = await User.find(keyword).select("-password");
	res.status(200).json({ success: true, data: users });
});

//@desc    Get single user
//@method  GET /api/user/:id
//@access  private, admin only
export const getUser = asyncHandler(async (req, res, next) => {
	const user = await User.findById(req.params.id).select("-password");

	if (!user) {
		res.status(404);
		throw new Error(`User with id ${req.params.id}`);
	}

	res.status(200).json({ success: true, data: user });
});

//@desc    Update user
//@method  PUT /api/user/:id
//@access  private, admin only
export const updateUser = asyncHandler(async (req, res, next) => {
	const user = await User.findByIdAndUpdate(req.params.id, req.body, {
		runValidators: true,
		new: true,
	}).select("-password");

	if (!user) {
		res.status(404);
		throw new Error(`User with id ${req.params.id}`);
	}

	res.status(200).json({ success: true, data: user });
});

//@desc    Delete user
//@method  DELETE /api/user/:id
//@access  private, admin only
export const deleteUser = asyncHandler(async (req, res, next) => {
	const user = await User.findByIdAndDelete(req.params.id);

	if (!user) {
		res.status(404);
		throw new Error(`User with id ${req.params.id}`);
	}

	res.status(200).json({ success: true, data: {} });
});
