import { Router } from "express";
import passport from "passport";
import ClientController from "../controllers/client.controller.js";

const controller = new ClientController();

const router = Router();

// router
//   .get("/", controller.getAll)
//   .get("/:id", controller.getById)
//   .post("/", controller.create)
//   .put("/:id", controller.update)
//   .delete("/:id", controller.delete);
router
  .post("/register", controller.register)
  .post("/login", controller.login)
  .get("/profile", passport.authenticate("jwtCookies"), controller.profile)
  .get("/current", passport.authenticate("jwtCookies"), (req, res) =>
    res.send(req.user),
  );

export default router;
