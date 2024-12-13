import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://jurnalight:987654321@cluster0.0wbab.mongodb.net/');
    console.log("DB Connected")
}