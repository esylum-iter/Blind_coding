import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI).then(()=>{
            console.log("Connected to MongoDB");
        });
    } catch(err){
        console.error(err);
    }
}