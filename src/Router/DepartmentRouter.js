import express from "express";
import { getDepartData, getFullNews, saveActData, saveDepartData, saveNews, saveNoticeData, savePoliceStationData, savedistrictData, saveofficerData, updateDepartment, updateDepartmentToAct, updateNoticeDepart, updateOfficersDataTOPoliceS, updatePoliceStationDataToDepart, updateUserToPoliceStations, updatedistrict } from "../Controller/departmentDataController.js";
import multer from "multer";
import path from "path";
import { saveVehicleComaplaints, updateVehicleComToComplaint } from "../Controller/complaintsController.js";
import { saveArrestedPersonData, updatearrestedPersonToDepart } from "../Controller/citizenInforController.js";
import { saveCharacterVerify, saveCharacteraddress, savePgverifyData, saveWitnesData, updateAddressToCharcterVerify, updateCharacterToPoliceS, updatePoliceStationToPgVerify, updateWitnesToCharcterVerify } from "../Controller/characterVerifyController.js";
// import { saveCharacterVerify, saveCharacteraddress, saveWitnesData, updateAddressToCharcterVerify, updateCharacterToPoliceS, updateWitnesToCharcterVerify } from "../Controller/characterVerifyController.js";
const router = express.Router();
const storage = multer.diskStorage(
    {
        destination:'./src/Images',
        filename:(req,file,cb)=>{
            return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
        }
    }
)
router.use(express.static('src/Images'));
const upload = multer({storage:storage});
router.post("/department",upload.single('image'),saveDepartData);
router.post("/savepolicestation",upload.single('image'),savePoliceStationData);
router.post("/saveofficers",upload.single('image'),saveofficerData);
// router.post("/savecomplaint",saveComplaints);
router.post("/vehiclecomplaints",upload.single('img'),saveVehicleComaplaints);
router.post("/savedis",savedistrictData);
router.post("/savenotice",upload.single('file'),saveNoticeData);
router.post("/save/arrestedperson",upload.single('img'),saveArrestedPersonData)
router.post("/save/charcterverify",upload.single('image'),saveCharacterVerify)
router.post("/save/address",upload.single('image'),saveCharacteraddress)
router.post("/save/witness",saveWitnesData);
router.post("/save/pgverify",upload.single('adharimg'), savePgverifyData);
router.post("/save/act",upload.single("image"),saveActData);
router.post("/news",upload.single('image'),saveNews);
router.put("/updatedepart/policestation/:id/:obj",updatePoliceStationDataToDepart);
router.put("/updatepolicestation/officers/:id/:obj",updateOfficersDataTOPoliceS);
router.put("/update/compaintsvehicle/:id/:obj",updateVehicleComToComplaint);
router.put("/update/policestation/user/:id/:obj",updateUserToPoliceStations);
router.put("/update/depart/district/:id/:obj",updatedistrict);
router.put("/update/depart/:id",updateDepartment);
router.put("/update/depart/notice/:id/:obj",updateNoticeDepart);
router.put("/update/depart/arrestedperson/:id/:obj",updatearrestedPersonToDepart);
router.put("/update/policestation/characterverify/:id/:obj",updateCharacterToPoliceS);
//update address and witness
router.put("/update/charcter/address/:id/:obj",updateAddressToCharcterVerify)
router.put("/update/charcter/witness/:id/:obj",updateWitnesToCharcterVerify)
//updatepolicepgverify
router.put("/update/policestation/pgverify/:id/:obj",updatePoliceStationToPgVerify)
router.put("/update/department/act/:id/:obj",updateDepartmentToAct);
router.get("/",getDepartData);
router.get("/news/fullnews",getFullNews);

export default router;