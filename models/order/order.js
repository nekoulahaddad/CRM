import mongoose from "mongoose";
const { Schema, Types } = mongoose;

const OrderSchema = new Schema({
  customer: {
    _id: { type: Types.ObjectId },
    name: { type: String, required: true },
  },
  shop: {
    _id: { type: Types.ObjectId },
    name: { type: String, required: true },
  },
  status: {
    _id: { type: Types.ObjectId },
    value: { type: String, required: true },
  },
  region: {
    _id: { type: Types.ObjectId, required: true },
    value: { type: String, required: true },
  },
  delivery: { type: Boolean, required: true },
  delivery_sum: { type: Number, required: true },
  delivery_address: { type: Object, required: true },
  delivery_type: { type: Object, required: true },
  sum: { type: Number, required: true },
  comment: { type: String, required: true },
  title: { type: String, required: true },
  products: { type: Array, required: true },
});

export const Order = mongoose.model("Order", OrderSchema);
