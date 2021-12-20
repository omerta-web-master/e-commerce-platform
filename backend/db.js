import mongoose from "mongoose";

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to database".yellow);
};

export default connectDB;
