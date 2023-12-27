import mongoose from "mongoose";
const Depart = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    noofpolicestations: {
        type: Number
    },
    foundingdate: {
        type: String,
        required: true
    },
    sp:{
        type:String,
        required:true
    },
    policestations: [
        { type: mongoose.Schema.Types.ObjectId, ref: "policestations" }
    ]
});

const policestation = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    TIhead: { type: String, required: true },
    foundingdate: { type: String, required: true },
    officers: [{ type: mongoose.Schema.Types.ObjectId, ref: "officers"}],
    // cases:[{type:mongoose.Schema.Types.ObjectId,ref:""}],
    number:{type:Number,required:true},
    


});

const officer = new mongoose.Schema({
    name:{ type: String, required: true},
    rank:{ type:String,required: true},
    badgenumber:{ type:Number,required:true},
    joiningdate:{type:String,required:true},
    number:{type:Number,required:true},
    address:{type:String,required:true},
    image:{type:String}
})







export const Department = new mongoose.model("department", Depart);
export const policeStation = new mongoose.model("policestations",policestation)
export const Officers = new mongoose.model("officers",officer)