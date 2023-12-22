import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log(process.env.NEXT_PUBLIC_MONGO_URI);
    const conn = await mongoose.connect(
      process.env.NEXT_PUBLIC_MONGO_URI as string,
      {
        dbName: "PortfolioData",
      },
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // @ts-ignore
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
