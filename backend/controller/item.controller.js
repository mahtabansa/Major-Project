import { Schema } from "mongoose";
import User from "../model/user.model.js";
import Item from "../model/item.model.js";
import uploadOnCloudinary from "../utils/Cloudinary.js";

export const AddItem = async (req, res) => {
  try {
    const { name, ram, storage, price, description } = req.body;
    const itemData = {
      name,
      ram,
      storage,
      price,
      image: null,
      description,
      seller: req.userId,
    };

    if (!req.file) {
      return res.status(400).json({
        message: "Image file is required",
      });
    }

    if (req.file) {
      const uploaded = await uploadOnCloudinary(req.file.path);
      itemData.image = uploaded;
    }
    console.log("itemData ", itemData);

    const newItem = await Item.create(itemData);

    return res.status(201).json({
      message: "Item created successfully",
      item: newItem,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const GetAllItems = async (req, res) => {
  try {
    const items = await Item.find({ seller: req.userId }).populate('seller', 'name email');
    console.log("Items fetched: ", items);

    return res.status(200).json({
      items
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }

}


export const EditItem = async (req, res) => {
  try {
    const ItemId = req.params.id;

    const { name, price, description } = req.body;

    const updateData = { name, price, description };

    if (req.file) {
      updateData.image = await uploadOnCloudinary(req.file.path);
    }

    const item = await Item.findByIdAndUpdate(
      ItemId,
      updateData,
      { name, price, description },
      { new: true },
    );

    if (!item) {
      return res.status(500).json({ message: "item not found" });
    }

    const shop = await Shop.findOne({ owner: req.userId }).populate({
      path: "items",
      options: { sort: { updatedAt: -1 } },
    });
    if (!shop) {
      return res
        .status(401)
        .json({ message: "shop not found error in editItem controller" });
    }

    return res.status(200).json(shop);
  } catch (err) {
    return res.status(500).json({ message: "error occured while edit item" });
  }
};



export const DeleteItem = async (req, res) => {
  try {
    const ItemId = req.params.id;

    const item = await Item.findByIdAndDelete(ItemId);

    if (!item) {
      return res.status(404).json({ message: "item not found" });
    }
    

    return res.status(200).json(item);
  } catch (err) {
    return res.status(500).json({ message: "error occured while Delete item" });
  }
};