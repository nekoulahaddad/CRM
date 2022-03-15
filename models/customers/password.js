import mongoose from "mongoose";
const { Schema, Types } = mongoose;

const CustomerPWDSchema = new Schema({
  customer_id: { type: Types.ObjectId },
  email: { type: String, required: true },
  password: { type: String, required: true },
  reset: {
    expiresIn: { type: Date, required: false, default: null },
    token: { type: String, required: false, default: null },
  },
});

export const CustomerPWD = mongoose.model("CustomerPWD", CustomerPWDSchema);
