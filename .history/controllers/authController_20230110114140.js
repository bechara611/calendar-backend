import { request, response } from "express";
import Usuarios from "../models/Usuarios.js";
import bcryptjs from 'bcryptjs'
export const authControllerGetrenew = (req = request, res = response) => {
    //RENOVAR TOKEN
    res.status(200).json({
        ok: true,
        msg: 'Renew token'
    })
}


export const authControllerLoginPost =async (req = request, res = response) => {
    //LOGIN DE USUARIO
    const { email, password } = req.body;

    let usuarioBD =await Usuarios.find({email})
    
    if(!usuarioBD){
        return res.status(400).json({
            ok: false,
            error: 'USER NOT FOUND'
        })   
    }
    //let comparacionPassword = bcryptjs.compareSync(usuarioBD.password,password)


    res.status(200).json({
        ok: true,
        msg: 'Login',
      // comparacionPassword,
       usuarioBD
    })

}

export const authControllerRegisterPost = async (req = request, res = response) => {
    const { email, password, name } = req.body;

    try {

        let existe = await Usuarios.find({ email })
       const seguridad= bcryptjs.genSaltSync(10);
        if(existe.length>=1){
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
        //encriptamos
        usuario.password=bcryptjs.hashSync(password,seguridad)
    
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

