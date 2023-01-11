import { Router } from "express";
import { actualizarEvento, crearEventos, getEventos } from "../controllers/Eventos.js";

export const routerEventos = Router();

routerEventos.get('/',getEventos)

routerEventos.post('/',crearEventos)

routerEventos.put('/:id',actualizarEvento)





