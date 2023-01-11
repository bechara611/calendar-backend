import { Router } from "express";
import {  authControllerGetrenew, authControllerLoginPost, authControllerRegisterPost } from "../controllers/authController.js";

export const routerAuth= Router();

//LOGIN
routerAuth.post('/',authControllerLoginPost)


//RENOVAR TOKEN
routerAuth.get('/renew',authControllerGetrenew)


//REGISTRO DE UN USUARIO NUEVO
routerAuth.post('/new',authControllerRegisterPost)