import { request, response } from "express";

export const getEventos=(req=request,res=response)=>{


    res.status(200).json({
        ok:true,
        msg:'GetEvenetos'
    })
}