import { Router } from "express";
import CategoryController from "../controllers/category.controller.js";
const controller = new CategoryController();

const router = Router();

router
  .get("/", controller.getAll)
  .get("/:id", controller.getById)
  .post("/", controller.create)
  .put("/:id", controller.update)
  .delete("/:id", controller.delete);

export default router;
