import mongoose from "mongoose";

export const Conn = () => {
  return mongoose.connect(process.env.MONGO_URI);
};
