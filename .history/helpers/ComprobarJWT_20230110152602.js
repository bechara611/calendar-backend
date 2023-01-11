import { request, response } from 'express'
import JWT from 'jsonwebtoken'

export const ComprobarJWT=async(req=request,res=response, token)=>{
    
    return new Promise((resolve,reject)=>{
        try {
            let payload= JWT.verify(token,process.env.KEY_SECRET)
            resolve(payload)
        } catch (error) {
            console.log(error)
            reject(null)
        }
        
    })
}