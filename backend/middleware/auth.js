import jwt from "jsonwebtoken";
import User from "../models/User.js";
import asyncHandler from "express-async-handler";

export const protect = asyncHandler(async (req, res, next) => {
	if (
		!req.headers.authorization ||
		!req.headers.authorization.startsWith("Bearer")
	) {
		res.status(401);
		throw new Error("Unautorized to access this route");
	}

	const token = req.headers.authorization.split(" ")[1];
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	const id = decoded._id;
	const user = await User.findById(id).select("-password");
	if (!user) {
		res.status(401);
		throw new Error("Unautorized to access this route");
	}
	req.user = user;

	next();
});

export const adminOnly = asyncHandler(async (req, res, next) => {
	if (req.user?.isAdmin) {
		next();
	} else {
		res.status(401);
		throw new Error("Not authorized to access this route, admin only");
	}
});
