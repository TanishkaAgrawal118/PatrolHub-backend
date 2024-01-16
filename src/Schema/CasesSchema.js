import mongoose from "mongoose";

// const complaints = new mongoose.Schema({
//         vehiclecomplaint:[{type:mongoose.Schema.ObjectId,ref:"vehiclecomplaint"}]
          
// })
const vehiclecomplaints = new mongoose.Schema({
           name:{type:String,required:true},
           model:{type:String,required:true},
           type:{type:String,required:true},
           price:{type:Number,required:true},
           owner:{type:String},
           area:{type:String},
           time:{type:String},
           date:{type:String},
           dis:{type:String},
           img:{type:String},
           status:{type:String,default:"Pending"},
           officerCharge:{type:String,default:"As Soon As Charge"},
           officerContact:{type:Number},
           process:{type:String}

})

const generalTheft = new mongoose.Schema({
        amount:{type:String,required:true},
        items: [{ type: String }],
        location:{type:String},
        reportedperson:{type:String},
        date:{type:String,required:true},
        status:{type:String,default:"Pending"},
        dis:{type:String},
        officerCharge:{type:String,default:"As Soon As Charge"},
        officerContact:{type:Number},
        process:{type:String}

})
const kidnappingReportSchema = new mongoose.Schema({
        victimname:{type:String,required:true},
        victimage:{type:Number,required:true},
        date:{type:String},
        location:{type:String,required:true},
        reportedperson:{type:String,required:true},
        status:{type:String,default:"Pending"},
        image:{type:String},
        dis:{type:String},
        officerCharge:{type:String,default:"As Soon As Charge"},
        officerContact:{type:Number},
        process:{type:String}
})
// export  const complaint = new mongoose.model("complaint",complaints);
export const vehiclecomplaint = new mongoose.model("vehiclecomplaint",vehiclecomplaints);
export const generalThefts = new mongoose.model("generalThefts",generalTheft);
export const kidnappingReport = new mongoose.model("kidnappingReport",kidnappingReportSchema); 