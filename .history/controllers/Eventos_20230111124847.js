import { request, response } from "express";
import eventos from './../models/event.js'


export const getEventos = async (req = request, res = response) => {

    try {

        const eventosBD = await eventos.find().populate('user','name')
        res.status(200).json({
            ok: true,
            eventos: eventosBD
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'INTERNAL ERROR'
        })
    }
}

export const crearEventos = async (req = request, res = response) => {

    try {
        const body = req.body;
        body.user = req.uid;
        const evento = new eventos(body)
        const eventoGuardado = await evento.save();
      
        res.status(200).json({
            ok: true,
            msg: 'crearEventos',
            evento: eventoGuardado
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'INTERNAL ERROR'
        })
    }
}


export const actualizarEvento = (req = request, res = response) => {
    const { id } = req.params

    res.status(200).json({
        ok: true,
        msg: 'actualizarEvento',
        id
    })
}

export const eliminarEvento = (req = request, res = response) => {
    const { id } = req.params

    res.status(200).json({
        ok: true,
        msg: 'eliminarEvento',
        id
    })
}