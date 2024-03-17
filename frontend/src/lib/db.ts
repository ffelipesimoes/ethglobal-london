import mongoose from "mongoose";

global.mongoose = global.mongoose || {};

const connect = async () => {
  try {
    if (global.mongoose.conn) {
      console.log("Using existing connection")
      return global.mongoose.conn;
    }

    if (process.env.MONGODB_URI === undefined) {
      throw new Error("MONGODB_URI is undefined");
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI, {});
    console.log("Connected to mongodb");

    // Save connection to global variable
    global.mongoose.conn = conn;

    return conn;
  } catch (error) {
    console.error("Error connecting to mongodb", error);
    throw error; // Rethrow the error so caller is aware an error happened
  }
};

export default connect;
