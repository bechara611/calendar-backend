import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routerDany from '../Routes/dany.js';
dotenv.config();

export class Server{
    

    constructor(){
        this.app=express();
        this.rutas={
            dany:'/dany'
        }
        this.port=process.env.PORT || '8080'
        this.Middlewares();
        this.Rutas();
    }

    Middlewares(){

        this.app.use(cors())
        this.app.use(express.json())
    }
    Rutas(){
        this.app.use('/dany',routerDany)
    }

    activarBack(){
        this.app.listen(this.port,()=>{
            console.log(`APP running in ${this.port} `)
        })
    }
}