import express from "express";
import { allUsers,updateProfile,changePassword,deleteUser,getPicUploadUrl,setPicUrl } from "../controller/user.controller.js";
import secureRoute from "../middleware/secureRoute.js";
const router = express.Router();

router.use(secureRoute);

router.get("/allusers", allUsers);
router.patch("/updateprofile", updateProfile);
router.patch("/changepassword",changePassword);
router.post("/picuploadurl", getPicUploadUrl);
router.post("/setpicurl", setPicUrl);

// to be done
router.delete("/deleteuser", deleteUser);

export default router;
