import Services from "./class.services.js";

import ProductDao from "../daos/mongodb/product.dao.js";

export default class ProductServices extends Services {
    constructor() {
        super(new ProductDao())
    }
}