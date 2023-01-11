import { request, response } from "express";
import Usuarios from "../models/Usuarios.js";
import bcryptjs from 'bcryptjs'
import { GenerarJWT } from "../helpers/GenerarJWT.js";
import { ComprobarJWT } from "../helpers/ComprobarJWT.js";


export const authControllerGetrenew = async (req = request, res = response) => {
    //RENOVAR TOKEN

    //con el middleware de comprobar token obtenemos el uid y el name entonces generamos el token nuevo

    const token = await GenerarJWT(req.uid,req.name)
    try {
        res.status(200).json({
            ok: true,
            msg: 'Renew token',
            token
        })


    } catch (error) {
        return res.status(500).json({
            ok: false,
            errores: 'INTERNAL ERROR',
           
        })
    }

}


export const authControllerLoginPost = async (req = request, res = response) => {
    //LOGIN DE USUARIO
    try {
        const { email, password } = req.body;

        let usuario = await Usuarios.findOne({ email })

        if (!usuario) {
            return res.status(400).json({
                ok: false,
                error: 'USER NOT FOUND'
            })
        }

        let comparacionPassword = bcryptjs.compareSync(password, usuario.password)

        if (!comparacionPassword) {
            return res.status(400).json({
                ok: false,
                error: 'INCORRECT PASSWORD'
            })
        }

        //TODO
        //general JSON WEB TOKEN
        const token = await GenerarJWT(usuario.id, usuario.name)

        res.status(200).json({
            ok: true,
            msg: 'LOGIN SUCCESS',
            token,
            uid: usuario.id,
            name: usuario.nombre,
            usuario: usuario
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            errores: 'INTERNAL ERROR'
        })
    }

}

export const authControllerRegisterPost = async (req = request, res = response) => {
    const { email, password, name } = req.body;

    try {

        let existe = await Usuarios.find({ email })
        const seguridad = bcryptjs.genSaltSync(10);
        if (existe.length >= 1) {
            return res.status(400).json({
                ok: false,
                error: 'EMAIL ALREADY IN USE'
            })
        }
        const usuario = new Usuarios({
            name: name,
            email,
            password
        })
        //encriptamos
        usuario.password = bcryptjs.hashSync(password, seguridad)

        //Guardamos la BD
        await usuario.save();

        //generamos el token
        const token = await GenerarJWT(usuario.id, usuario.nombre)

        return res.status(201).json({
            ok: true,
            msg: 'Register',
            uid: usuario.id,
            name: usuario.name,
            token,
            usuario
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            errores: 'INTERNAL ERROR'
        })
    }
    //REGISTRO DE USUARIO
}

