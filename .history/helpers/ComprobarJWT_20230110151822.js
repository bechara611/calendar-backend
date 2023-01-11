import { request, response } from 'express'
import JWT from 'jsonwebtoken'

export const ComprobarJWT=(req=request,res=response,token,next)=>{
    try {
        JWT.verify(token,process.env.KEY_SECRET);
        next()
    } catch (error) {
      return res.status(200).json({
            ok:false,
            error:'INVALID TOKEN'
        })
    }
}