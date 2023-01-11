import { request, response } from 'express'
import JWT from 'jsonwebtoken'

export const ComprobarJWT = async (req = request, res = response, token) => {
    try {
        if(!token){
            res.status(400).json({
                ok:false,
                error:'PLEASE, INSERT A TOKEN'
            })
        }

        const verificado = JWT.verify(token, process.env.KEY_SECRET)
        return verificado;
        
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({
            ok:false,
            error:'INVALID TOKEN'
        })

    }
}
