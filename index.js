import express from "express";
import cors from "cors";
import { ConfigureDb } from "./src/Config/dbConfig.js";
import router from "./src/Router/DepartmentRouter.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(router)
app.listen(5800,()=>{
        ConfigureDb();
        console.log("Server is Running Port number 5800 ");
})