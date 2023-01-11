import JWT from "jsonwebtoken"

const GenerarJWT = async (uid='') => {
    try {
        return new Promise((resolve, reject) => {
            const payload =uid;
            JWT.sign(payload,process.env.KEY_SECRET)
        })
    } catch (error) {

    }
}