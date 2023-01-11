import { request, response, Router } from "express";
import { danyget } from "../controllers/dany.js";

const routerDany = Router();

routerDany.get('/',danyget)

export default routerDany;