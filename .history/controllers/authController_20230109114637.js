import { request, response } from "express";

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

export const authControllerRegisterPost = (req=request,res=response) => {
    const {email,password,name} = req.body;
//REGISTRO DE USUARIO
    res.status(201).json({
        ok:true,
        msg:'Register',
        email,
        password,
        name
    })
  
}

