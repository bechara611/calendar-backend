import mongoose from "mongoose"

export const ConectarDB=async()=>{
    try {
       await mongoose.set(process.env.MONGOID,false)
       console.log('DB CONNECTED')
    } catch (error) {
        throw new Error(error)
    }
}