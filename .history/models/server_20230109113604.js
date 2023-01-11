import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routerDany from '../Routes/dany.js';
import { routerAuth } from '../Routes/auth.js';
import { ConectarDB } from '../DB/DBConnect.js';
dotenv.config();

export class Server {


    constructor() {
        this.app = express();
        this.rutas = {
            dany: '/dany',
            usuarios: '/api/auth'
        }
        this.port = process.env.PORT || '8080'
        this.Middlewares();
        this.Rutas();
        this.bd();
    }

    Middlewares() {
        this.app.use(express.static('public'))
        this.app.use(cors())
        this.app.use(express.json())
    }
    Rutas() {
        this.app.use(this.rutas.dany, routerDany)
        this.app.use(this.rutas.usuarios, routerAuth)
    }

    activarBack() {
        this.app.listen(this.port, () => {
            console.log(`APP running in ${this.port} `)
        })
    }
    async bd(){
        ConectarDB()
    }
}