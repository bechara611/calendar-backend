import { request, response } from 'express'
import JWT from 'jsonwebtoken'

export const ComprobarJWT=async(token,req=request,res=response)=>{
    return new Promise((resolve,reject)=>{
        try {
            let payload= JWT.verify(token,process.env.KEY_SECRET)
            resolve(payload)
        } catch (error) {
          return res.status(400).json({
            ok:false,
            error:'INVALID TOKEN'
          })
        }
        
    })
}