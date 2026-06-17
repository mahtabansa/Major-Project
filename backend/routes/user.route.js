import express from "express";
import { registerUser } from '../controller/user.controller.js'
import { loginUser } from '../controller/user.controller.js'
import { configDotenv } from "dotenv";
import { getCurrentUser } from '../controller/authUser.js'
import {authmiddleware} from '../middleware/authmiddleware.js'
configDotenv();

 const UserRouter = express.Router();
UserRouter.post("/register", registerUser);
UserRouter.post("/signin", loginUser);
UserRouter.get("/getUser", authmiddleware, getCurrentUser);

export  {UserRouter};