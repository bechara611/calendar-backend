import { Model, Schema } from "mongoose";

const EventoSchema = new Schema({
    nombre:{
        type:String,
        require: true
    }
})