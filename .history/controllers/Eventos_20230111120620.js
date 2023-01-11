import { request, response } from "express";

export const getEventos=(req=request,res=response)=>{


    res.status(200).json({
        ok:true,
        msg:'getEventos'
    })
}

export const crearEventos=(req=request,res=response)=>{

    
    res.status(200).json({
        ok:true,
        msg:'crearEventos'
    })
}


export const actualizarEvento=(req=request,res=response)=>{
    const {id} = req.params

    res.status(200).json({
        ok:true,
        msg:'actualizarEvento',
        id
    })
}

export const eliminarEvento=(req=request,res=response)=>{
    const {id} = req.params

    res.status(200).json({
        ok:true,
        msg:'eliminarEvento',
        id
    })
}