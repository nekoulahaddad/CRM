import express from "express";
const router = express.Router();
import {
  insertOrders,
  getOrders,
  deleteOrder,
} from "../controllers/orderContoller.js";

router.get("/insert", insertOrders);
router.get("/all", getOrders);
router.get("/delete/:id", deleteOrder);

export default router;
