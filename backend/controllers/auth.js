import User from "../models/User.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//@desc    Login user
//@method  POST /api/auth/login
//@access  public
export const login = asyncHandler(async (req, res, next) => {
	const user = await User.findOne({ email: req.body.email });
	if (!user) {
		throw new Error(`Invalid credentials`);
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	);
	if (!isPasswordValid) {
		throw new Error(`Invalid credentials`);
	}

	const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
		expiresIn: "1d",
	});

	res.status(200).json({
		success: true,
		token,
		user,
	});
});

//@desc    Register user
//@method  POST /api/auth/register
//@access  public
export const register = asyncHandler(async (req, res, next) => {
	//Encript password
	req.body.password = await bcrypt.hash(req.body.password, 10);

	const user = await User.create(req.body);

	const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
		expiresIn: "1d",
	});

	res.status(200).json({
		success: true,
		token,
		user,
	});
});

//@desc    Load user
//@method  POST /api/auth/me
//@access  public
export const loadUser = asyncHandler(async (req, res, next) => {
	const token = req.body.token;
	if (!token) {
		console.log("Here");
		res.status(401);
		throw new Error("Invalid token");
	}

	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	const user = await User.findById(decoded._id).select("-password");
	if (!user) {
		throw new Error(`No user with id ${decoded._id}`);
	}
	res.status(200).json({ success: true, data: user });
});
