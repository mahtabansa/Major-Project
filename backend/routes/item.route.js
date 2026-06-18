import express from 'express'
import { authmiddleware } from '../middleware/authmiddleware.js';
import { GetAllItems, AddItem,DeleteItem,EditItem} from '../controller/item.controller.js';

import multer from 'multer';
const upload = multer({dest:'./public'});

export const itemRouter = express.Router();
itemRouter.post("/add-phone", authmiddleware, upload.single("image"), AddItem);
itemRouter.get("/get-items", authmiddleware, GetAllItems);
itemRouter.post("/edit-item/:id", authmiddleware, upload.single("image"), EditItem);
itemRouter.post("/delete-item/:id", authmiddleware, DeleteItem);