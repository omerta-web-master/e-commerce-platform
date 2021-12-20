import connectDB from "./db.js";
import Product from "./models/Product.js";
import products from "./sample_data/products.js";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();

connectDB();

const importData = async () => {
	try {
		await Product.create(products);
		console.log("Data imported...".green);
		process.exit();
	} catch (error) {
		console.log(error.message);
		process.exit();
	}
};

const deleteData = async () => {
	try {
		await Product.deleteMany();
		console.log("Data deleted...".red);
		process.exit();
	} catch (error) {
		console.log(error.message);
		process.exit();
	}
};

if (process.argv[2] === "-i") {
	importData();
}

if (process.argv[2] === "-d") {
	deleteData();
}
