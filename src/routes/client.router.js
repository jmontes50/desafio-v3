import { Router } from "express";
import ClientController from "../controllers/client.controller.js";
const controller = new ClientController();

const router = Router();

router
  .get("/", controller.getAll)
  .get("/:id", controller.getById)
  .post("/", controller.create)
  .put("/:id", controller.update)
  .delete("/:id", controller.delete);

export default router;
