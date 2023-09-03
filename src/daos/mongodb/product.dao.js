import MongoDao from "./mongo.dao.js";
import { productModel } from "./models/product.model.js";

export default class ProductDao extends MongoDao {
  constructor() {
    super(productModel);
  }
}