import mongoose from "mongoose"

export const ConectarDB=async()=>{
    try {
       await mongoose.connect(process.env.MONGOID)
       console.log('DB CONNECTED')
    } catch (error) {
        throw new Error(error)
    }
}