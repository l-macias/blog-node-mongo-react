import express from "express";
import morgan from "morgan";
import bodyparser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import blogRoutes from "./routes/blog.js";
import authRoutes from "./routes/auth.js";
dotenv.config();

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(cookieParser());

//Routes Middlewares
app.use("/api", blogRoutes);
app.use("/api", authRoutes);
//cors
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

//port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//db
mongoose
  .connect(process.env.DATABASE_CLOUD, {})
  .then(() => console.log("MONGO DB Connected"));