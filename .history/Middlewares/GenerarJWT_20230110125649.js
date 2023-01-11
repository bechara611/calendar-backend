import JWT from "jsonwebtoken"

export const GenerarJWT = async (uid='') => {
    try {
        return new Promise((resolve, reject) => {
            const payload =uid;
            JWT.sign(payload,process.env.KEY_SECRET,{
                expiresIn:"4h",
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