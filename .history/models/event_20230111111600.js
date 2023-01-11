import { model, Schema } from "mongoose";

const EventoSchema = new Schema({
    title:{
        type:String,
        require: [true,'PLEASE INSER A TITLE']
    },
    notes:{
        type:String,
    },
    start:{
        type:Date,
        require:[true,'PLEASE INSERT A START DATE']
    },
    start:{
        type:Date,
        require:[true,'PLEASE INSERT A END DATE']
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'usuarios'
    }
})

export default model('eventos',EventoSchema)