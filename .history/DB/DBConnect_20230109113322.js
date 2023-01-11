import mongoose from "mongoose"

const ConectarDB=async()=>{
    try {
        const conectar = await mongoose.connect(process.env.MONGOID)
    } catch (error) {
        
    }
}