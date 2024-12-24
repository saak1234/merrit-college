import mongoose from "mongoose";

const connectionTodatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Connected to database");
  } catch (err) {
    console.log(err);
  }
};

export default connectionTodatabase;
