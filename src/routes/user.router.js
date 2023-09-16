import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import { checkAuth } from "../middlewares/authJWT.js";

const controller = new UserController();

const router = Router();

router
  .post("/register", controller.register)
  .post("/login", controller.login)
  .get("/profile", checkAuth, controller.profile);

export default router;
