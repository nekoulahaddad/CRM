import mongoose from "mongoose";
const { Schema, Types } = mongoose;

const CustomerJWTSchema = new Schema({
  customer_id: { type: Types.ObjectId },
  email: { type: String, required: true },
  token: { type: String, required: true },
  refresh: { type: String, required: true },
});

export const CustomerJWT = mongoose.model("CustomerJWT", CustomerJWTSchema);
