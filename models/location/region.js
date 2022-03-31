import mongoose from "mongoose";
const { Schema, Types } = mongoose;
const regionSchema = new Schema({
  value: { type: String, required: true },
  title: { type: String, required: true },
  translations: { type: Array, required: false },
  country: {
    _id: { type: Types.ObjectId, required: true },
    value: { type: String, required: true },
  },
});

export const Region = mongoose.model("Region", regionSchema);
