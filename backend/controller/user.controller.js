import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import User from "../model/user.model.js";
import { configDotenv } from "dotenv";
configDotenv();
import { createToken } from "../utils/token.js";

const registerUser = async (req, res) => {
  const { name, email, address, phone, password, role } = req.body;

  if (!name || !email || !address || !phone || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  console.log(" name, email, address, phone, password, role ", name, email, address, phone, password, role );
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("hashedPassword:", hashedPassword);

        console.log("hello befrore creating user");
    const newUser = await User.create({
      name,
      email,
      address,
      phone,
      password: hashedPassword,
      role,
    });
    console.log("New user created:", newUser);

    const token = createToken(newUser._id);
    console.log("Generated token:", token);

    res.cookie("token", token, {
      httpOnly: "true",
      Secure: "false",
      sameSite: "lax",
      path: "/",
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });

    // For this example, we'll just return a success message
    res
      .status(201)
      .json({
        message: "User registered successfully",
        user: { name, email, address, phone, role },
      });
      console.log(newUser);
  } catch (err) {
    console.error("Error in registerUser:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
export { registerUser };

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("email,password", email, password);
  try {
    if (!email || !password) {
      return res.send({ message: "Please provide email and password" });
    }
    const user = await User.findOne({ email });
    console.log("user", user);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const hashPassword = await bcrypt.compare(req.body.password, user.password);

    if (!hashPassword) {
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }
    }
    const token = createToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      success: true,
      message: "Login successful",
      token: token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
        address: user.address,
       
      },
    });

    next();
  } catch (err) {
    console.log("error occurs during login", err);
  }
};

const logout = async (req, res) => {
  try {
    console.log("logout handler");
    res.clearCookie("token");

    return res.status(200).json({ message: "signOut successfully" });
  } catch (err) {
    return res.status(500).json(`singOut error ${err}`);
  }
};
export { logout };


