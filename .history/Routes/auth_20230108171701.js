import { Router } from "express";
import {  authControllerGetrenew, authControllerLoginPost, authControllerRegisterPost } from "../controllers/authController.js";

export const routerAuth= Router();

routerAuth.get('/renew',authControllerGetrenew)


routerAuth.post('/',authControllerLoginPost)

routerAuth.post('/new',authControllerRegisterPost)