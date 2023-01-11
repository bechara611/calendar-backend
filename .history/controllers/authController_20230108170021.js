import { request, response } from "express";

const authController =(req=request,res=response)=>{



    res.status(200).json({
        ok:true
    })
}