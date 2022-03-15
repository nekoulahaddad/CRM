import mongoose from "mongoose";
const { Schema, Types } = mongoose;

const customerSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  patronymic: { type: String, required: false },
  birthday: { type: Date, required: false, default: null },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  region: {
    _id: { type: Types.ObjectId },
    value: { type: String },
  },
  delivery: { type: Array, required: false, default: [] },
  active: { type: Boolean, default: true },
  deleted: { type: Boolean, default: false },
  favorites: { type: Array, required: false, default: [] },
  comparations: { type: Array, required: false, default: [] },
});

export const Customer = mongoose.model("Customer", customerSchema);
