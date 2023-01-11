import { request, response } from 'express'
import JWT from 'jsonwebtoken'

export const ComprobarJWT=async(token,req=request,res=response)=>{
   
        try {
            let payload= JWT.verify(token,process.env.KEY_SECRET)
            return payload
        } catch (error) {
            console.log(error)
          return res.status(400).json({
            ok:false,
            error:'INVALID TOKEN'
          })
        }
        
   
}