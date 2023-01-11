import { request, response } from "express";
import { validationResult } from "express-validator";

export const comprobarCampos=(req=request,res=response,next)=>{
    const errores = validationResult(req)
    console.log(errores.isEmpty())
    if (!errores.isEmpty()) {
        return res.status(400).json({
            errores
        })
    }
    next()
}