import { StatusCodes } from "http-status-codes"
import { generalThefts, kidnappingReport, vehiclecomplaint } from "../Schema/CasesSchema.js";
import { user } from "../Schema/userSchema.js";


// export async function saveComplaints(req,res)
// {
//       try 
//       {
//           const data = new complaint(req.body);
//           const response = await data.save();
//           res.status(StatusCodes.CREATED).json(response);
        
//       } 
//       catch (error) 
//       { 
//         res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
        
//       }
// }

export async function saveVehicleComaplaints(req,res)
{
   try{
         const image = `http://localhost:5800/${req.file.filename}`;
         req.body['img']=image;
         const data = new  vehiclecomplaint(req.body);
         const response = await data.save();
         res.status(StatusCodes.CREATED).json(response);  
   } 
   catch(error)
    {
         console.log(error);
       res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
   }
}

export async function updateVehicleComToComplaint(req,res)
{
    try 
    {
        await user.findByIdAndUpdate(req.params.id,{$push:{vehiclecomplaints:req.params.obj}});
        res.status(StatusCodes.OK).json();        
    } 
    catch (error)
     {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
        
    }
}
//save generalTheft
export async function savegeneralTheft(req,res)
{
    try 
    {
        const data = new generalThefts(req.body);
        const response = await data.save();
        res.status(StatusCodes.CREATED).json(response);
    } 
    catch (error)
     {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
        
    }
}
export async function updateGeneralTheftToUser(req,res)
{
      try 
      {
          await user.findByIdAndUpdate(req.params.id,{$push:{generalThefts:req.params.obj}});
          res.status(StatusCodes.OK).json();
      } 
      catch (error)
       {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
        
      }
}

//save kidnappingreport
export async function saveKidnapingReport(req,res)
{
    try 
    {
        const image = `http://localhost:5800/${req.file.filename}`;
        req.body['image']=image;
        const data = new  kidnappingReport(req.body);
        const response = await data.save();
        res.status(StatusCodes.CREATED).json(response);  
        
    } 
    catch (error)
     {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
        
    }
}

export async function updateKidnapingReportToUser(req,res)
{
      try 
      {
          await user.findByIdAndUpdate(req.params.id,{$push:{kidnappingReport:req.params.obj}});
          res.status(StatusCodes.OK).json();
      } 
      catch (error)
       {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
        
      }
}
//save generalTheft
