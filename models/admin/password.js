import mongoose from "mongoose";
const { Schema, Types } = mongoose;
import bcryptjs from "bcryptjs";

const AdminPWDSchema = new Schema({
  admin_id: { type: Types.ObjectId },
  email: { type: String, required: true },
  password: { type: String, required: true },
  reset: {
    expiresIn: { type: Date, required: false, default: null },
    token: { type: String, required: false, default: null },
  },
});

AdminPWDSchema.pre("save", async function (next) {
  const adminPWD = this;
  if (adminPWD.isModified("password")) {
    adminPWD.password = await bcryptjs.hash(adminPWD.password, 12);
  }
  next();
});

export const AdminPWD = mongoose.model("AdminPWD", AdminPWDSchema);
