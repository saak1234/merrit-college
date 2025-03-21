import mongoose from "mongoose";

const connectionTodatabase = async (): Promise<void> => {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    };
    console.log("Connecting to database");
    console.log(process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI as string,options);
    console.log("Connected to database");
  } catch (err) {
    console.log(err);
  }
};

export default connectionTodatabase;
