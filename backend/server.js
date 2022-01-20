import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import path from "path";
import cors from "cors";

import connectDB from "./db.js";
import errorHandler from "./middleware/errorHandler.js";

//Route files
import products from "./routes/products.js";
import users from "./routes/users.js";
import auth from "./routes/auth.js";
import orders from "./routes/orders.js";
import upload from "./routes/upload.js";

dotenv.config();

const app = express();

const __dirname = path.resolve();
// Make static folder
app.use(express.static(path.join(__dirname, "/public")));

// Connect to database
connectDB();

// Enable cors
app.use(cors());

// Body parser
app.use(express.json());

// Mount routers
app.use("/api/products", products);
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/orders", orders);
app.use("/api/upload", upload);

app.get("/", (req, res) => {
	res.status(200).send("Api running");
});

// Error handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
	console.log(`Server running on port: ${process.env.PORT}`.blue);
});
