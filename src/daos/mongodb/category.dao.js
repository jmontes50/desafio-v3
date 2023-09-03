import MongoDao from "./mongo.dao.js";
import { categoryModel } from "./models/category.model.js";

export default class CategoryDao extends MongoDao {
  constructor() {
    super(categoryModel);
  }
}