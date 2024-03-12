import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Conneted to Mongo DB");
  } catch (error) {
    console.log("Error has in connecting to Mongo DB", error);
  }
};
