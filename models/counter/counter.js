import mongoose from "mongoose";
const { Schema, Types } = mongoose;

const counterSchema = new Schema({
  name: { type: String, required: true },
  count: { type: Number, default: 0 },
});

export const Counter = mongoose.model("Counter", counterSchema);
