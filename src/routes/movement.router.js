import { Router } from "express";
import MovementController from "../controllers/movement.controller.js";
const controller = new MovementController();

const router = Router();

router
  .get("/", controller.getAll)
  .get("/:id", controller.getById)
  .post("/", controller.create)
  .put("/:id", controller.update)
  .delete("/:id", controller.delete);

export default router;
