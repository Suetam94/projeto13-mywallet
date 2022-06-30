import { Schema, model } from "mongoose";
import { type } from "os";

const Finance = new Schema({
  entry: {
    type: Number,
    required: true,
  },
  entryType: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export default model("Finance", Finance);
