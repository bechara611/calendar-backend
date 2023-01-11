import { Router } from "express";
import { crearEventos, getEventos } from "../controllers/Eventos.js";

export const routerEventos = Router();

routerEventos.get('/',getEventos)

routerEventos.post('/',crearEventos)



