import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

export class Server{

    constructor(){
        this.app=express();
        this.port=process.env.PORT || '8080'
    }

    Middlewares(){

        this.app.use(cors())
    }

    activarBack(){
        this.app.listen(this.port,()=>{
            console.log(`APP running in ${this.port} `)
        })
    }
}