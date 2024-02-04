import express from "express";
import userController from "../controller/UserController.mjs";
const router = express.Router();
// let authorizationM = require("../middleware/Authorization");

//*register new user
router.post("/register", userController.Register);
//*login user
router.post("/login", userController.Login);
//*make follow
// router.post("/:userIdToFollow/follow", authorizationM, userController.follow);
//*make unfollow
// router.post(
//   "/:userIdToUnfollow/unfollow",
//   authorizationM,
//   userController.unfollow
// );

export default router;
