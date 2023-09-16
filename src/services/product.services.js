import Services from "./class.services.js";

import ProductDao from "../daos/mongodb/product.dao.js";

const productDao = new ProductDao();

export default class ProductServices extends Services {
  constructor() {
    super(productDao);
  }
}
