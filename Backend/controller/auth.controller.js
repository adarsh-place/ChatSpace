import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../jwt/generateToken.js";

export const signup = async (req, res) => {
  const { fullname, email, password, confirmPassword } = req.body;
  try {
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already registered" });
    }
    // Hashing the password
    const hashPassword = await bcrypt.hash(password, 10);

    const idx = Math.floor(Math.random() * 100) + 1; // generate a num between 1-100
    const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;

    const newUser = await new User({
      fullname,
      email,
      password: hashPassword,
      profilePic: randomAvatar,
    });
    await newUser.save();
    if (newUser) {
      createTokenAndSaveCookie(newUser._id, res);
      res.status(201).json({
        message: "User created successfully",
        user: {
          _id: newUser._id,
          fullname: newUser.fullname,
          email: newUser.email,
          profilePic: newUser.profilePic,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(400).json({ error: "Invalid user credential" });
    }
    createTokenAndSaveCookie(user._id, res);
    res.status(201).json({
      message: "User logged in successfully",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        profilePic: user.profilePic,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("chatspacejwt");
    res.status(201).json({ message: "User logged out successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
