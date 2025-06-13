import mongoose from "mongoose";
import { MONGO_URI } from "./env.js";

const dataBaseUrl = "mongodb+srv://itheadmaster:EXz10Tm273rmjEG8@cluster0.prdlyt8.mongodb.net/" || MONGO_URI

const connectDB = async () => {
  try {
    await mongoose.connect(dataBaseUrl,{dbName:"softmore"});
    console.log(`Successfully connnected to mongoDB 👍`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;