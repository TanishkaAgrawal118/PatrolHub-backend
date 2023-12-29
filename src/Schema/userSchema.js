import mongoose from "mongoose";
const users = new mongoose.Schema({
        name:{type:String,required:true},
        number:{type:Number,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
        age:{type:Number,required:true},
        address:{type:String},
        city:{type:String,required:true},
        verify:{type:Boolean},
        otp: { type:Number }

})

export const user = new mongoose.model('user',users)