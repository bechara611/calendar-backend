import { request, response } from "express";

const getEventos=(req=request,res=response)=>{


    res.status(200).json({
        ok:true,
        msg:'GetEvenetos'
    })
}