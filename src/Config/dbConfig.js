import mongoose from "mongoose";
export async function ConfigureDb() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/patrolhubDb')
        console.log("DB Connected....");
    }
    catch (error) {
        console.log(error);
    }
}