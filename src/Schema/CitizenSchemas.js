import mongoose from "mongoose";
const arrestedperson = new mongoose.Schema({
        name:{type:String,required:true},
        age:{type:Number,required:true},
        crime:{type:String,required:true},
        dis:{type:String,required:true},
        arrestedDate:{type:String},
        arrestofficer:{type:String,required:true},
        policestation:{type:String,required:true},
        img:{type:String}
})

export const arrestedpersons = new mongoose.model("arrestedpersons",arrestedperson);
