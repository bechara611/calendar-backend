import { model, Schema } from "mongoose";

const EventoSchema = new Schema({
    title:{
        type:String,
        required: [true,'PLEASE INSER A TITLE']
    },
    notes:{
        type:String,
    },
    start:{
        type:Date,
        required:[true,'PLEASE INSERT A START DATE']
    },
    start:{
        type:Date,
        required:[true,'PLEASE INSERT A END DATE']
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'Usuarios',
        required:[true,'INSERT A VALID USER']
    }
})

export default model('eventos',EventoSchema)