import JWT from "jsonwebtoken"

export const GenerarJWT = async (uid='',name='') => {
    try {
        return new Promise((resolve, reject) => {
           
         
            JWT.sign({uid,name},process.env.KEY_SECRET,{
                expiresIn:'4h',
            },(error,token)=>{
                if(error){
                    return reject(error)
                }
                return resolve(token)
            })
        })
    } catch (error) {
        reject(error)
    }
}