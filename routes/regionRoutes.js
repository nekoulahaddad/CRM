import express from "express";
import { insertCountries, insertCity } from "../controllers/regionController.js";
const router = express.Router();

router.get("/insertCountries", insertCountries);
router.get("/insertCity", insertCity);

export default router;
