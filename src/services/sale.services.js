import Services from "./class.services.js";

import SaleDao from "../daos/mongodb/sale.dao.js";

const saleDao = new SaleDao()

export default class SaleServices extends Services {
    constructor() {
        super(saleDao)
    }
}