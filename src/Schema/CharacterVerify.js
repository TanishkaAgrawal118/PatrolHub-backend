import mongoose, { mongo } from "mongoose";

const characterVerify = new mongoose.Schema({
          fname:{type:String,required:true},
          mname:{type:String},
          lname:{type:String,required:true},
          fathername:{type:String,required:true},
          mothername:{type:String,required:true},
          gender:{type:String,required:true},
          landlineno:{type:String},
          mobileno:{type:Number,required:true},
          email:{type:String,required:true},
          image:{type:String},
          addres:[{type:mongoose.Schema.Types.ObjectId,ref:"addres"}],
          witnes:[{type:mongoose.Schema.Types.ObjectId,ref:"witnes"}],
          policestation:{type:mongoose.Schema.Types.ObjectId,ref:"policestations"}

})

const address = new mongoose.Schema({
       mnumber:{type:Number,required:true},
       gnumber:{type:Number,required:true},
       colony:{type:String,required:true},
       village:{type:String,required:true},
       post:{type:String,required:true},
       district:{type:String,required:true},
       country:{type:String,required:true},
       policestation:{type:String,required:true},
       pincode:{type:String,required:true},
       stable:{type:Boolean},
       image:{type:String},
       characterverify:{type:mongoose.Schema.ObjectId,ref:"characterverify"}

})
const witness = new mongoose.Schema({
    fname: { type: String, required: true },
    mname: { type: String},
    lname: { type: String, required: true },
    gender: { type: String },  // Make gender optional
    mobileno: { type: Number, required: true },
    pincode: { type: Number, required: true },
    addres: { type: String, required: true },
    relation: { type: String, required: true },
    characterverify:{type: mongoose.Schema.Types.ObjectId,ref:"characterverify"},
});

// pg Verify
const pgverify = new mongoose.Schema({
       ownerfname:{type:String,required:true},
       ownerlname:{type:String,required:true},
       ownerbusiness:{type:String,required:true},
       owneremail:{type:String,required:true},
       ownerphone:{type:Number,required:true},
       owneraddress:{type:String,required:true},
       tenantfname:{type:String,required:true},
       tenantlname:{type:String,required:true},
       tenantmobile:{type:Number,required:true},
       tenantemail:{type:String,required:true},
       tenantbusiness:{type:String,required:true},
       gender:{type:String,required:true},
       adharimg:{type:String,required:true},
       dob:{type:String,required:true},
       totalmembertenant:{type:Number,required:true},
       presentmnumber:{type:Number,required:true},
       presentcolony:{type:String,required:true},
       presentvillage:{type:String,required:true},
       presentdistrict:{type:String,required:true},
       presentstate:{type:String,required:true},
       presentcountry:{type:String,required:true},
       presentpolicestation:{type:String,required:true},
       presentpincode:{type:String,required:true},
       permanantmnumber:{type:Number,required:true},
       permanantcolony:{type:String,required:true},
       permanantvillage:{type:String,required:true},
       permanantdistrict:{type:String,required:true},
       permanantstate:{type:String,required:true},
       permanantcountry:{type:String,required:true},
       permanantpolicestation:{type:String,required:true},
       permanantpincode:{type:String,required:true},
       policestation:{type:mongoose.Schema.ObjectId,ref:"policestation"}

})

export const characterverify = new mongoose.model("characterverify",characterVerify);
export const addres = new mongoose.model("addres",address);
export const witnes = new mongoose.model("witnes",witness);
export const pgverifyschema = new mongoose.model("pgverifyschema",pgverify)