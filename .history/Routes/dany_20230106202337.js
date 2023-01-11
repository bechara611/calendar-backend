import { request, response, Router } from "express";
import { danyget } from "../controllers/dany";

const routerDany = Router();

routerDany.get('/',danyget)

export default routerDany;