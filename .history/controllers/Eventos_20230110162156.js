import { request, response } from "express";

export const getEventos=(req=request,res=response)=>{


    res.status(200).json({
        ok:true,
        msg:'GetEvenetos'
    })
}

export const crearEventos=(req=request,res=response)=>{


    res.status(200).json({
        ok:true,
        msg:'crearEventos'
    })
}


export const actualizarEvento=(req=request,res=response)=>{


    res.status(200).json({
        ok:true,
        msg:'crearEventos'
    })
}