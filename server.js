import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

import path from "path";
import config from "./config/index.js";
const __dirname = path.resolve();
const app = express();
const db = config.MONGO_URI;

app.use(express.json());

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("the database is ready to use ..."))
  .catch((err) => console.log(err));

app.use(cors());
app.use("/api/admin", authRoutes);
app.use("/api/client", clientRoutes);
app.use("/api/order", orderRoutes);

/* production
app.use(express.static("frontend/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});
*/

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`every thing is ok ...${port} ${process.env.NODE_ENV}`);
});

export const server = app;