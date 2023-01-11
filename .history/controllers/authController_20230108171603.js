import { request, response } from "express";

export const authControllerGetrenew =(req=request,res=response)=>{

    res.status(200).json({
        ok:true,
        msg:'Renew token'
    })
}


export const authControllerLoginPost = () => {
    res.status(200).json({
        ok:true,
        msg:'Login'
    })
  
}
