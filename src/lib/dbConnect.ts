import mongoose from "mongoose";

const connectionTodatabase = async (): Promise<void> => {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    };
    await mongoose.connect(process.env.MONGO_URI as string,options);
    console.log("Connected to database");
  } catch (err) {
    console.log(err);
  }
};

export default connectionTodatabase;
