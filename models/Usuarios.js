import { model, Schema } from "mongoose";

const UsuarioSchema = new Schema({
    name:{
        type:String,
        require:[true,'PLEASE INSERT A NAME']
    },
    email:{
        type:String,
        require:[true,'PLEASE INSERT A EMAIL'],
        unique:true
    },
    password:{
        type:String,
        require:[true,'PLEASE INSERT A PASSWORD']
    }
})

export default model('Usuarios',UsuarioSchema)