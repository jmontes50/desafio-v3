import Services from "./class.services.js";

import CategoryDao from "../daos/mongodb/category.dao.js";

const categoryDao = new CategoryDao();

export default class CategoryServices extends Services {
  constructor() {
    super(categoryDao);
  }
}
