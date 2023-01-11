import { request, response } from 'express'
import JWT from 'jsonwebtoken'

export const ComprobarJWTMiddleware = async (req=request,res=response,next) => {
    try {
        const token = req.header('x-token')
        if(!token){
            return res.status(400).json({
                ok: false,
                error: 'PLEASE INSERT A TOKEN'
            })
        }
      
        let payload = JWT.verify(token, process.env.KEY_SECRET)
        next();
    } catch (error) {
        return res.status(400).json({
            ok: false,
            error: 'INVALID TOKEN'
        })
    }


}