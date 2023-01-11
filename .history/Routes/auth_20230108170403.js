import { Router } from "express";
import { authController } from "../controllers/authController.js";

export const routerAuth= Router();

routerAuth.get('/',authController)