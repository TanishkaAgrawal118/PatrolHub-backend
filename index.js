import express from "express";
import cors from "cors";
import { ConfigureDb } from "./src/Config/dbConfig.js";
import router from "./src/Router/DepartmentRouter.js";
import userRouter from "./src/Router/userRouter.js";
import dotenv from "dotenv";
dotenv.config();
// console.log(process.env);
//   console.log(process.env.ACCOUNTSID);
//   console.log(process.env.AUTHTOKEN);

// import twilio from 'twilio';
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(userRouter);
// const accountSid = 'AC1a6daecaad24a160f01c247b70ea486c';
// const authToken = 'aa9f83198c49df315c1806d7627c286a';

// const client = twilio(accountSid, authToken);

// client.messages
//   .create({
//     body: 'Hello from twilio-node',
//     to: '+919301803525', // Text your number
//     from: '+18722137291', // From a valid Twilio number
//   })
//   .then((message) => console.log(message.sid));
app.listen(5800,()=>{
        ConfigureDb();
        console.log("Server is Running Port number 5800 ");
})