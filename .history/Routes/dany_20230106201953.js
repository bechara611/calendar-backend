import { request, response, Router } from "express";

const routerDany = Router();

routerDany.get('/',(req=request,res=response)=>{
    res.status(200).json({
        ok:true,
        msg:'siii'
    })
})

export default routerDany;