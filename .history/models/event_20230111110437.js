import { Model, Schema } from "mongoose";

const EventoSchema = Schema({
    nombre:{
        type:String,
        require: true
    }
})