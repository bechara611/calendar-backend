import { request, response } from "express";

export const authController =(req=request,res=response)=>{



    res.status(200).json({
        ok:true
    })
}