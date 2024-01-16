import mongoose from "mongoose";
import { vehiclecomplaint } from "./CasesSchema.js";
import { generalThefts } from "./CasesSchema.js";
import { kidnappingReport } from "./CasesSchema.js";
const users = new mongoose.Schema({
        name:{type:String,required:true},
        number:{type:Number,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
        age:{type:Number,required:true},  
        address:{type:String},
        city:{type:String,required:true},
        verify:{type:Boolean},
        otp: { type:String },
        vehiclecomplaints:[{type:mongoose.Schema.ObjectId,ref:"vehiclecomplaint"}],
        generalThefts:[{type:mongoose.Schema.ObjectId,ref:"generalThefts"}],
        kidnappingReport:[{type:mongoose.Schema.ObjectId,ref:"kidnappingReport"}]
})



export const user = new mongoose.model('user',users);