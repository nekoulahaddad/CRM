import mongoose from "mongoose";
const { Schema, Types } = mongoose;

const CitySchema = new Schema({
  country_id: { type: Types.ObjectId },
  value: { type: String, required: true },
  title: { type: String, required: false },
  translations: { type: Array, required: false },
});

export const City = mongoose.model("City", CitySchema);
