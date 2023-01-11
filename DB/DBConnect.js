import mongoose from "mongoose"

export const ConectarDB=async()=>{
    try {
        mongoose.set('strictQuery', false);
       await mongoose.connect(process.env.MONGOID)
       console.log('DB CONNECTED')
    } catch (error) {
        throw new Error(error)
    }
}