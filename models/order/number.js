import mongoose from "mongoose";
const { Schema, Types } = mongoose;
const OrderNumberSchema = new Schema({
  shop: {
    _id: { type: Types.ObjectId },
    value: { type: String },
  },
  value: { type: Number, required: true },
  prefix: { type: String, required: true },
});

export const OrderNumber = mongoose.model("OrderNumber", OrderNumberSchema);
