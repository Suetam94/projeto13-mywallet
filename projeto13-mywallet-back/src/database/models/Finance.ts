import { Schema, model } from "mongoose";

const Finance = new Schema({
  entry: {
    type: Number,
    required: true,
  },
  entryType: {
    type: String,
    enum: ["inbound", "outbound"],
    required: true,
  },
  description: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default model("Finance", Finance);
