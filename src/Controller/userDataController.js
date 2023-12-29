import bcrypt from "bcrypt";
import { user } from "../Schema/userSchema.js";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import twilio from "twilio";
dotenv.config();
export async function saveUserData(req, res) {
    try {
        const existingnumber = await user.findOne({ number: req.body.number });
        const existingemail = await user.findOne({ email: req.body.email });
        if (existingnumber || existingemail) {
            return res.status(StatusCodes.BAD_REQUEST).json("Account already exists. Please log in");
        }
       const otpdata = await userSendVerifyData(req.body.number);
       console.log(otpdata);
        const newpassword = bcrypt.hashSync(req.body.password, 12);
        req.body['password'] = newpassword;
        req.body['verify']=false;
        req.body['otp']=otpdata;
        const data = user(req.body);
        const response = await data.save();
        return res.status(StatusCodes.CREATED).json(response);


    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();

    }

}
//sendverifyotp
const userSendVerifyData = async (number) => {
    try {
        var otp = Math.floor(1000 + Math.random() * 9000);
        //   console.log(otp);  
        
        const accountSid = process.env.ACCOUNTSID;
        const authToken = process.env.AUTHTOKEN;
        const client = twilio(accountSid, authToken);
        // console.log(authToken);
        // console.log(number);
        client.messages
            .create({
                body: `We are always Protect you Verify ${otp}`,
                to: `+${number}`, // Text your number
                from: '+18722137291', // From a valid Twilio number
            })
            .then((message) => console.log(message.sid));
            return otp;

      
    }
    catch (error) {
        console.log(error);

    }


}
//verifyOtp
export async function verifyOtp(req,res)
{
    try 
    {
        const {number,otp}=req.body;
        // console.log(otp);
        const userData = await user.findOne({number:number});
        if(!userData)
        {
            return res.status(StatusCodes.NOT_FOUND)
                        .json({message:"User not found"});
        }
        if(!userData.verify && userData.otp===otp)
        {
            await user.updateOne({number},{$set:{verify:true}});
            return res.status(StatusCodes.OK)
                       .json({message:"OTP Verification Successful"});
        }
        else{
               return res.status(StatusCodes.UNAUTHORIZED)
                          .json({message:"Invalid Otp"})
        }
        
    } 
    catch (error) 
    {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}

export async function userLogin(req, res) {
    try {
        const users = await user.findOne({ number: req.body.number });
        if (users) {
            if (bcrypt.compareSync(req.body.password, users.password)) {
                const token = jwt.sign({ userId: users.users_id }, 'sumit123');
                res.status(StatusCodes.OK).json({ token: token });
            }
            else {
                res.status(StatusCodes.BAD_REQUEST).json("Wrong Password..!");

            }
        }
        else {
            res.status(StatusCodes.BAD_REQUEST).json("Wrong Mobile Number");
        }

    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}