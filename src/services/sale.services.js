import Services from "./class.services.js";

import SaleDao from "../daos/mongodb/sale.dao.js";

export default class SaleServices extends Services {
    constructor() {
        super(new SaleDao())
    }
}