import { Router } from "express";
import { check } from "express-validator";
import {  authControllerGetrenew, authControllerLoginPost, authControllerRegisterPost } from "../controllers/authController.js";
import { comprobarCampos } from "../Middlewares/comprobarCampos.js";
import { ComprobarJWTMiddleware } from "../Middlewares/ValidarJWTMiddleware.js";

export const routerAuth= Router();

//LOGIN
routerAuth.post('/',
check('email','INSERT A VALID EMAIL').isEmail(),
check('password','INSERT A VALID PASSWORD').not().isEmpty(),
check('password','PLEASE INSERT A VALID PASSWORD (MIN 6 CHARACTERS)').isLength({min:6}),
comprobarCampos,
authControllerLoginPost)


//RENOVAR TOKEN
routerAuth.get('/renew',ComprobarJWTMiddleware, authControllerGetrenew)


//REGISTRO DE UN USUARIO NUEVO
routerAuth.post('/new',
check('email','INSERT A VALID EMAIL').isEmail(),
check('password','INSERT A PASSWORD').not().isEmpty(),
check('password','PLEASE INSERT A VALID PASSWORD').isLength({min:6}),
check('name','INSERT A VALID name').not().isEmpty(),
comprobarCampos,
authControllerRegisterPost)