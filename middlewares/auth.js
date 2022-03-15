import config from "../config/index.js";
const { JWT_SECRET } = config;
import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  try {
    const token = req.body.token || req.query.token || req.headers.token;

    if (!token) {
      return res.send({
        status: 403,
        message: "Токен не найден",
      });
    }
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;
    } catch (err) {
      return res.send({ status: 401, message: "Неверный токен" });
    }
    return next();
  } catch (error) {
    res.send({
      status: 401,
      error,
      message: "Токен истёк",
    });
  }
};
