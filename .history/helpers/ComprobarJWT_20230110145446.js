import JWT from 'jsonwebtoken'

export const ComprobarJWT =async(token)=>{
    try {
        return new Promise((resolve,reject)=>{
            const verificado = JWT.verify(token,process.env.KEY_SECRET)
            resolve(verificado)
        })
        
    } catch (error) {
        reject(false)
    }
}