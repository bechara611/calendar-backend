
const cors = require('cors')

export class Server{

    constructor(){
        this.app=express();

    }

    Middlewares(){
        this.app.use(cors())
    }
}