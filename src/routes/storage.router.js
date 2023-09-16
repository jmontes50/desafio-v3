import { Router } from "express";
import StorageController from "../controllers/storage.controller.js";
const controller = new StorageController();

const router = Router();

router
  .get("/", controller.getAll)
  .get("/:id", controller.getById)
  .post("/", controller.create)
  .put("/:id", controller.update)
  .delete("/:id", controller.delete);

export default router;
