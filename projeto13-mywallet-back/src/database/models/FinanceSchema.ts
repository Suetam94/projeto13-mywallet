import { Schema, model } from "mongoose";

const FinanceSchema = new Schema({
  entry: {
    type: Number,
    required: true,
  },
  entryType: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

export default model("Finance", FinanceSchema);
