import mongoose from "mongoose";
const conString = `mongodb+srv://Sumit:Sumit123@cluster0.7z2ptjw.mongodb.net/?retryWrites=true&w=majority`
export async function ConfigureDb() {
    try {
        await mongoose.connect(conString)
        console.log("DB Connected....");
    }
    catch (error) {
        console.log(error);
    }
   
}