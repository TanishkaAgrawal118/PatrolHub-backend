import { StatusCodes } from "http-status-codes";
import { addres, characterverify, pgverifyschema, witnes } from "../Schema/CharacterVerify.js";
import { policeStation } from "../Schema/DepartmentSchema.js";


export async function saveCharacterVerify(req, res) {
    try {
        const image = `http://localhost:5800/${req.file.filename}`;
        req.body['image'] = image;
        const data = new characterverify(req.body);
        const response = await data.save();
        res.status(StatusCodes.OK).json(response);

    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();

    }
}
export async function updateCharacterToPoliceS(req, res) {
    try {
        await policeStation.findByIdAndUpdate(req.params.id, { $push: { characterverify: req.params.obj } });
        res.status(StatusCodes.OK).json();

    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();

    }
}
export async function saveCharacteraddress(req, res) {
    try {
        const image = `http://localhost:5800/${req.file.filename}`;
        req.body['image'] = image;
        const data = new addres(req.body);
        const response = await data.save();
        res.status(StatusCodes.OK).json(response);


    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();

    }
}
export async function updateAddressToCharcterVerify(req, res) {
    try {
        await characterverify.findByIdAndUpdate(req.params.id, { $push: { addres: req.params.obj } });
        res.status(StatusCodes.OK).json();

    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();

    }
}
export async function saveWitnesData(req, res) {
    try {
        // const image = `http://localhost:5800/${req.file.filename}`;
        // req.body['image'] = image;
        const data = new witnes(req.body);
        const response = await data.save();
        res.status(StatusCodes.OK).json(response);


    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();

    }
}
export async function updateWitnesToCharcterVerify(req, res) {
    try {
        await characterverify.findByIdAndUpdate(req.params.id, { $push: { witnes: req.params.obj } });
        res.status(StatusCodes.OK).json();

    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();

    }
}
export async function savePgverifyData(req, res) {
    try
     {
         const image = `http://localhost:5800/${req.file.filename}` 
         req.body['adharimg'] =image;
         const data = new pgverifyschema(req.body);
         const response = await data.save();
         res.status(StatusCodes.OK).json(response); 

    } 
    catch (error)
     {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();

    }
}

export async function updatePoliceStationToPgVerify(req,res)
{
    try
     {
           await policeStation.findByIdAndUpdate(req.params.id,{$push:{pgverify:req.params.obj}});
           await pgverifyschema.findByIdAndUpdate(req.params.obj,{policestation:req.params.id});
           res.status(StatusCodes.OK).json();
        
    } 
    catch (error)
     {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
        
    }
}