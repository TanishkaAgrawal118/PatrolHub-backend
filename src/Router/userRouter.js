import express from "express";
import { saveUserData, userLogin, verifyOtp } from "../Controller/userDataController.js";
import { saveKidnapingReport, savegeneralTheft, updateGeneralTheftToUser, updateKidnapingReportToUser } from "../Controller/complaintsController.js";
import multer from "multer";
import path from "path";
const userRouter = express.Router();
const storage = multer.diskStorage(
    {
        destination:'./src/Images',
        filename:(req,file,cb)=>{
            return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
        }
    }
)
userRouter.use(express.static('src/Images'));
const upload = multer({storage:storage});
userRouter.post("/register",saveUserData);
userRouter.post("/register/verify",verifyOtp);
userRouter.post("/login",userLogin);
userRouter.post("/complaint/generaltheft",savegeneralTheft);
userRouter.post("/compalint/kidnapingreport",upload.single("image"),saveKidnapingReport);
userRouter.put("/complaint/user/generaltheft/:id/:obj",updateGeneralTheftToUser);
userRouter.put("/complaint/user/kdinapingreport/:id/:obj",updateKidnapingReportToUser);
// userRouter.put("/update/user/complaint/:id/:obj",updateComplaintToUser);
export default userRouter;