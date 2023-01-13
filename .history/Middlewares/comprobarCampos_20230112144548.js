import { request, response } from "express";
import { validationResult } from "express-validator";

export const comprobarCampos=(req=request,res=response,next)=>{
    const error = validationResult(req)
    
    if (!error.isEmpty()) {
        return res.status(400).json({
            ok:false,
            error
        })
    }
    next()
}