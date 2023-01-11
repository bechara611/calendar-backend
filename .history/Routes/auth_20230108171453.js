import { Router } from "express";
import {  authControllerGetrenew } from "../controllers/authController.js";

export const routerAuth= Router();

routerAuth.get('/renew',authControllerGetrenew)


routerAuth.post('/',)