import { configDotenv } from "dotenv";
configDotenv();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {UserRouter} from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import { itemRouter } from "./routes/item.route.js";


const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(  
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/users", UserRouter);
app.use('/api/items',itemRouter)


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));
