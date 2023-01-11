import { Router } from "express";
import { authController } from "../controllers/authController";

export const routerAuth= Router();

routerAuth.get('/',authController)