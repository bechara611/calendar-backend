import { request, response } from "express";
import eventos from './../models/event.js'


export const getEventos = async (req = request, res = response) => {

    try {

        const eventosBD = await eventos.find().populate('user', 'name password __v')
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


export const actualizarEvento = async (req = request, res = response) => {
    try {

        const { id } = req.params
        const {title,notes,start,end}= req.body

        const existe = await eventos.findById(id)

        if (!existe) {
            return res.status(400).json({
                ok: false,
                msg: 'EVENT NOT FOUND'
            })
        }

        if(existe.user.toString()!==req.uid){
            res.status(401).json({
                ok:false,
                msg:`YOU DON'T HAVE PERMISSION TO DO THAT ACTION.`
            })
        }

        const eventoActualizado = await eventos.findByIdAndUpdate(id, { title,notes,start,end,user:req.uid }, { new: true }).populate('user','name')

        res.status(200).json({
            ok: true,
            msg: 'UPDATED',
            evento: eventoActualizado
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'INTERNAL ERROR'
        })
    }
}

export const eliminarEvento =async (req = request, res = response) => {
    const { id } = req.params


    const existe = await eventos.findById(id)

    if (!existe) {
        return res.status(400).json({
            ok: false,
            msg: 'EVENT NOT FOUND'
        })
    }

    if(existe.user.toString()!==req.uid){
        res.status(401).json({
            ok:false,
            msg:`YOU DON'T HAVE PERMISSION TO DO THAT ACTION.`
        })
    }
    const eventoEliminado = await eventos.findByIdAndDelete(id,{new:true})

    res.status(200).json({
        ok: true,
        msg: 'DELETED',
        evento: eventoEliminado
    })
}