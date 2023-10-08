import { Router } from "express";
import ProductController from "../controllers/product.controller.js";
import checkUserRole from "../middlewares/roleHandler.js";

const controller = new ProductController();

const router = Router();

router
  .get("/", controller.getAll)
  .get("/:id", controller.getById)
  .post("/", checkUserRole(), controller.create)
  .put("/:id", checkUserRole(), controller.update)
  .delete("/:id", checkUserRole(), controller.delete);

export default router;
