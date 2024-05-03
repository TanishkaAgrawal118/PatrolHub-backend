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
    image:
    {
      type:String
    },
    spnumber:{
        type:String
    },
    spemail:{
        type:String
    },
    spallotmentyear:{
        type:Number
    },
    district:{
            type:mongoose.Schema.Types.ObjectId,ref:"district"
    },
    notices:[
        {type:mongoose.Schema.Types.ObjectId,ref:"notice"}
    ],
    policestations: [
        { type: mongoose.Schema.Types.ObjectId, ref: "policestations" }
    ],
    arrestedpersons:[
        {type:mongoose.Schema.Types.ObjectId,ref:"arrestedpersons"}
    ] ,
    pgverify:[
        {type:mongoose.Schema.Types.ObjectId,ref:"pgverifySchema"}
    ],
    act:[
        {type:mongoose.Schema.Types.ObjectId,ref:"actSchema"}
    ],
    // allnews:[
    //     {type:mongoose.Schema.Types.ObjectId,ref:"allnews"}
    // ]
    officers:[
        {type:mongoose.Schema.Types.ObjectId, ref:"officers"}
    ],
});

const policestation = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    TIhead: { type: String, required: true },
    foundingdate: { type: String, required: true },
    officers: [{ type: mongoose.Schema.Types.ObjectId, ref: "officers"}],
    user:[{type:mongoose.Schema.Types.ObjectId,ref:"user"}],
    characterverify:[{type:mongoose.Schema.Types.ObjectId,ref:"characterverify"}],
    number:{type:Number,required:true},
    image:{type:String}
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

//about district
 const aboutdis = new mongoose.Schema({
    area:{type:String,required:true}, 
    totalMale:{type:String,required:true},
    population:{type:String,required:true},
    totalfemale:{type:String,required:true},
    totaltehsil:{type:Number,required:true},    
    totalvillages:{type:Number,required:true},
    totalblocks:{type:Number,required:true},
    totalnagarparisad:{type:Number,required:true},
    muncipalco:{type:Number,required:true},
    dis:{type:String,required:true},
    language:{type:String,required:true}   
  
 })
//notice-department
const notice =new mongoose.Schema({
       title:{type:String,required:true},
       dis:{type:String},
       sdate:{type:String,required:true},
       edate:{type:String,required:true},
       file:{type:String}

})
// act and rules
  const act = new mongoose.Schema({
        title:{type:String,required:true},
        actno:{type:Number},
        origindate:{type:String,required:true},
        content:{type:String,required:true},
        image:{type:String},
        applyBy:{type:String,required:true},
        department:{type:mongoose.Schema.Types.ObjectId,ref:"department"}

  })  
  const news= new mongoose.Schema({
    type:{type:String, required:true},
    date:{type:String},
    image:{ type: String},
    heading:{ type: String, required: true},
    description:{ type: String, required: true},
})
export const Department = new mongoose.model("department", Depart);
export const policeStation = new mongoose.model("policestations",policestation)
export const Officers = new mongoose.model("officers",officer);
export const district = new mongoose.model("district",aboutdis);
export const notices = new mongoose.model("notice",notice);
export const actSchema = new mongoose.model("actSchema",act);
export const News=new mongoose.model("allNews", news);