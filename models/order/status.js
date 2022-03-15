import mongoose from "mongoose";
const { Schema, Types } = mongoose;
const OrderStatusSchema = new Schema({
  value: { type: String, required: true },
  title: { type: String, required: true },
  translations: { type: Array, required: false, default: [] },
});

export const OrderStatus = mongoose.model("OrderStatus", OrderStatusSchema);
