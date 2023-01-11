import { model, Schema } from "mongoose";

const UsuarioSchema = new Schema({
    nombre:{
        type:String,
        required:[true,'PLEASE INSERT A NAME']
    },
    email:{
        type:String,
        required:[true,'PLEASE INSERT A EMAIL'],
        unique:true
    }
})

export default model('Usuarios',UsuarioSchema)