import { request, response } from "express";
import eventos from './../models/event'
export const getEventos=(req=request,res=response)=>{


    res.status(200).json({
        ok:true,
        msg:'getEventos'
    })
}

export const crearEventos=async(req=request,res=response)=>{

    const body= req.body;
    body.user=req.uid;
    const evento = new eventos(body)
    const eventoGuardado = await evento.save();
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