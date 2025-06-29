import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { putObjectUrl} from "../Storage/index.js";

export const allUsers = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser },
    }).select("-password");
    res.status(201).json(filteredUsers);
  } catch (error) {
    console.log("Error in allUsers Controller: " + error);
  }
};

export const updateProfile = async (req, res) => {
  const { fullname: updatedName } = req.body;
  const loggedInUser = req.user._id;
  try {
    await User.updateOne(
      { _id: loggedInUser },
      {
        $set: {
          fullname: updatedName,
        },
      }
    );
    res.status(201).json({
      message: "Profile updated successfully",
      user: {
        _id: req.user._id,
        fullname: updatedName,
        email: req.user.email,
        profilePic: req.user.profilePic,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const userId = req.user._id;
  try {
    const user = await User.findOne({ _id: userId });
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!user || !isMatch) {
      return res.status(400).json({ error: "Invalid Password" });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    user.save();

    res.status(201).json({
      message: "Password updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getPicUploadUrl = async (req, res) => {
  const { fileType } = req.body;
  const fileName = `profileimage${req.user.email}`;
  try {
    const {uploadUrl,fileUrl} = await putObjectUrl(fileName, fileType);

    res.status(201).json({
      message: "Upload link generated successfully",
      uploadUrl: uploadUrl,
      fileUrl : fileUrl,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const setPicUrl = async (req, res) => {
  const { picUrl } = req.body;
  const userId = req.user._id;
  try {
    const user = await User.findOne({ _id: userId });
    user.profilePic = picUrl;
    user.save();

    res.status(201).json({
      message: "Image uploaded successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// to be done
export const deleteUser = async (req, res) => {
  try {
    res.status(201).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log("Error in deleting user: " + error);
  }
};
