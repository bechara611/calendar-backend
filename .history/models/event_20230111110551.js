import { model, Schema } from "mongoose";

const EventoSchema = new Schema({
    name:{
        type:String,
        required: [true,'PLEASE INSER A NAME']
    }
})

export default model('eventos',EventoSchema)