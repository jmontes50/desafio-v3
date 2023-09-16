import ClassController from "./class.controller.js";
import CategoryServices from "../services/category.services.js";

const categoryService = new CategoryServices();

export default class CategoryController extends ClassController {
  constructor() {
    super(categoryService);
  }
}
