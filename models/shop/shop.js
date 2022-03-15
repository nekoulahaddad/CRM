import mongoose from "mongoose";
const { Schema, Types } = mongoose;
const shopSchema = new Schema({
  name: { type: String, required: true },
  subdomain: { type: String, required: true },
  domain: { type: String, required: false },
  description: { type: String, required: false },
  translations: { type: Array, required: false },
  region: {
    _id: { type: Types.ObjectId },
    value: { type: String },
  },
  organization: { type: String, required: false },
  catalog: { type: Types.ObjectId, required: false },
  delivery_areas: { type: Array, required: false, default: [] },
  delivery_types: { type: Array, required: false, default: [] },
  tariff: {
    _id: { type: Types.ObjectId, required: false },
    start_date: { type: Date, required: false, default: null },
    end_date: { type: Date, required: false, default: null },
  },
  key_category: {
    _id: { type: Types.ObjectId, required: false },
    value: { type: String },
  },
});

export const Shop = mongoose.model("Shop", shopSchema);
