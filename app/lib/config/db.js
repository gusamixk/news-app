import mongoose from "mongoose";

export const ConnectDB = async () =>{
   const conn = await mongoose.connect('mongodb+srv://Jurnalight:zUn9VTqzLoZP44Ie@jurnalight.53dxg.mongodb.net/');

   console.log(conn)
    console.log("DB Connected")   
}

