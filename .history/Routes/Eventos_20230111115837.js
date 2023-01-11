import { Router } from "express";
import { check } from "express-validator";
import { actualizarEvento, crearEventos, eliminarEvento, getEventos } from "../controllers/Eventos.js";
import { isDate } from "../helpers/isDate.js";
import { comprobarCampos } from "../Middlewares/comprobarCampos.js";
import { ComprobarJWTMiddleware } from "../Middlewares/ValidarJWTMiddleware.js";

export const routerEventos = Router();

routerEventos.use(ComprobarJWTMiddleware)

routerEventos.get('/',getEventos)

routerEventos.post('/',
check('title','PLEASE INSERT A VALID TITLE').not().isEmpty(),
check('start','INSERT A VALID START DATE').custom(isDate),
comprobarCampos,
crearEventos)

routerEventos.put('/:id',actualizarEvento)

routerEventos.delete('/:id',eliminarEvento)





