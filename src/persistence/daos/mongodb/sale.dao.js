import MongoDao from "./mongo.dao.js";
import { saleModel } from "./models/sale.model.js";

export default class SaleDao extends MongoDao {
  constructor() {
    super(saleModel);
  }
}
