import { Router } from "express";
import CartController from "../controllers/cart.controller.js";
import checkCartOwner from "../middlewares/cartHandler.js";

const controller = new CartController();

const router = Router();

router
  .get("/", controller.getAll)
  .get("/:id", controller.getById)
  .post("/", controller.create)
  .put("/:id", checkCartOwner(), controller.update)
  .delete("/:id", checkCartOwner(), controller.delete);

export default router;
