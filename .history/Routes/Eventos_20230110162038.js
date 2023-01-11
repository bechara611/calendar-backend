import { Router } from "express";
import { crearEventos, getEventos } from "../controllers/Eventos";

const routerEventos = Router();

routerEventos.get('/',getEventos)

routerEventos.post('/',crearEventos)