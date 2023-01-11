import { Router } from "express";
import { actualizarEvento, crearEventos, eliminarEvento, getEventos } from "../controllers/Eventos.js";
import { ComprobarJWTMiddleware } from "../Middlewares/ValidarJWTMiddleware.js";

export const routerEventos = Router();

routerEventos.use(ComprobarJWTMiddleware)

routerEventos.get('/',getEventos)

routerEventos.post('/', crearEventos)

routerEventos.put('/:id',actualizarEvento)

routerEventos.delete('/:id',eliminarEvento)





