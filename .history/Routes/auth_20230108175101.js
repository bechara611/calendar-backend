import { Router } from "express";
import { check } from "express-validator";
import {  authControllerGetrenew, authControllerLoginPost, authControllerRegisterPost } from "../controllers/authController.js";

export const routerAuth= Router();

//LOGIN
routerAuth.post('/',
check('email','INSERT A VALID EMAIL').isEmail(),
authControllerLoginPost)


//RENOVAR TOKEN
routerAuth.get('/renew',authControllerGetrenew)


//REGISTRO DE UN USUARIO NUEVO
routerAuth.post('/new',authControllerRegisterPost)