import mongoose from "mongoose";
const { Schema, Types } = mongoose;

const adminSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    patronymic: { type: String, required: false },
    birthday: { type: Date, required: false, default: null },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    roles: { type: Array, required: false, default: "user" },
    region: {
      _id: { type: Types.ObjectId },
      value: { type: String },
    },
    active: { type: Boolean, default: true },
    deleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Admin = mongoose.model("Admin", adminSchema);
