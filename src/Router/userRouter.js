import express from "express";
import { saveUserData, userLogin, verifyOtp } from "../Controller/userDataController.js";
const userRouter = express.Router();
userRouter.post("/register",saveUserData);
userRouter.post("/register/verify",verifyOtp);
userRouter.post("/login",userLogin);
export default userRouter;