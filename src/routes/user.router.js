import { Router } from "express";
import passport from "passport";
import UserController from "../controllers/user.controller.js";

const controller = new UserController();

const router = Router();

router
  .post("/register", controller.register)
  .post("/login", controller.login)
  .get("/profile", passport.authenticate("jwtCookies"), controller.profile)
  .get("/current", passport.authenticate("jwtCookies"), (req, res) =>
    res.send(req.user),
  );

export default router;
