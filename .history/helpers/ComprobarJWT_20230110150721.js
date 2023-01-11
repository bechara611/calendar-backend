import { request, response } from 'express'
import JWT from 'jsonwebtoken'

export const ComprobarJWT = async (req = request, res = response, token) => {
    try {
        return new Promsie((resolve,reject)=>{


            if(!token){
               return res.status(400).json({
                    ok:false,
                    error:'PLEASE, INSERT A TOKEN'
                })
            }
    
            const verificado = JWT.verify(token, process.env.KEY_SECRET)
            resolve(verificado);
            
        })
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({
            ok:false,
            error:'INVALID TOKEN'
        })

    }
}
