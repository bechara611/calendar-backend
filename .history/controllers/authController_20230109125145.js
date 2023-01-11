import { request, response } from "express";
import Usuarios from "../models/Usuarios.js";

export const authControllerGetrenew =(req=request,res=response)=>{
//RENOVAR TOKEN
    res.status(200).json({
        ok:true,
        msg:'Renew token'
    })
}


export const authControllerLoginPost = (req=request,res=response)=> {
    //LOGIN DE USUARIO
    const {email,password} = req.body;
    res.status(200).json({
        ok:true,
        msg:'Login',
        email,
        password
    })
  
}

export const authControllerRegisterPost =async (req=request,res=response) => {
    const {email,password,name} = req.body;

    try {
        const usuario = new Usuarios({
            nombre:name,
            email,
            password
        });
        await usuario.save();
       
       return res.status(201).json({
            ok:true,
            msg:'Register',
            email,
            password,
            name
        })
      
    } catch (error) {
        console.log(error)
    res.status(500).json({
        ok:false,
        errores:'INTERNAL ERROR'
    })      
    }
//REGISTRO DE USUARIO
}

