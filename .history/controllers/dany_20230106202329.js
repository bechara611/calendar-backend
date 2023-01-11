import { request, response } from "express";

const danyget=(req=request,res=response)=>{
    res.status(200).json({
        ok:true,
        msg:'siii'
    })
}
export {danyget}