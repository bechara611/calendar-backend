import { request, response } from "express";
import Usuarios from "../models/Usuarios.js";

export const authControllerGetrenew = (req = request, res = response) => {
    //RENOVAR TOKEN
    res.status(200).json({
        ok: true,
        msg: 'Renew token'
    })
}


export const authControllerLoginPost = (req = request, res = response) => {
    //LOGIN DE USUARIO
    const { email, password } = req.body;
    res.status(200).json({
        ok: true,
        msg: 'Login',
        email,
        password
    })

}

export const authControllerRegisterPost = async (req = request, res = response) => {
    const { email, password, name } = req.body;

    try {

        const existe = await Usuarios.find({ email })

        if (existe) {
            return res.status(400).json({
                ok: false,
                error: 'EMAIL ALREADY IN USE'
            })
        }
        const usuario = new Usuarios({
            nombre: name,
            email,
            password
        })

        //Guardamos la BD
        await usuario.save();

        return res.status(201).json({
            ok: true,
            msg: 'Register',
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

