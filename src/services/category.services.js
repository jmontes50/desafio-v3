import Services from "./class.services.js";

import CategoryDao from "../daos/mongodb/category.dao.js";

export default class CategoryServices extends Services {
    constructor() {
        super(new CategoryDao())
    }
}