import mongoose from "mongoose";
const { Schema, Types } = mongoose;
import config from "../../config/index.js";
const { JWT_SECRET, REFRESH_TOKEN_SECRET } = config;
import jwt from "jsonwebtoken";

const AdminJWTSchema = new Schema({
  admin_id: { type: Types.ObjectId },
  email: { type: String, required: true },
  token: { type: String, required: true },
  refresh: { type: String, required: true },
});

AdminJWTSchema.methods.generateAuthToken = function () {
  const admin = this;
  const secret = JWT_SECRET;
  const token = jwt.sign({ _id: admin.admin_id }, secret, {
    expiresIn: "300s",
  });
  console.log(token);
  admin.token = token;
};

AdminJWTSchema.methods.generateRefreshToken = function () {
  const admin = this;
  const secret = REFRESH_TOKEN_SECRET;
  const refreshToken = jwt.sign({ _id: admin.admin_id }, secret, {
    expiresIn: "30 days",
  });
  admin.refresh = refreshToken;
};

export const AdminJWT = mongoose.model("AdminJWT", AdminJWTSchema);
