import { request, response } from "express";

export const authControllerGetrenew =(req=request,res=response)=>{

    res.status(200).json({
        ok:true,
        msg:'Renew token'
    })
}


export const authControllerLoginPost = (req=request,res=response)=> {
    res.status(200).json({
        ok:true,
        msg:'Login'
    })
  
}

export const authControllerRegisterPost = (req=request,res=response) => {
    res.status(200).json({
        ok:true,
        msg:'Register'
    })
  
}

