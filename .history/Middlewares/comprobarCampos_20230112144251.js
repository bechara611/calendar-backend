import { request, response } from "express";
import { validationResult } from "express-validator";

export const comprobarCampos=(req=request,res=response,next)=>{
    const errors = validationResult(req)
    
    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok:false,
            errors
        })
    }
    next()
}