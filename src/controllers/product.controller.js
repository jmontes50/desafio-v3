import ClassController from "./class.controller.js";
import ProductServices from "../services/product.services.js";

const productService = new ProductServices();

export default class ProductController extends ClassController {
  constructor() {
    super(productService);
    console.info("sdffds");
  }
}
