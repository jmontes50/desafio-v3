import MongoDao from "./mongo.dao.js";
import { cartModel } from "./models/cart.model.js";

export default class CartDao extends MongoDao {
  constructor() {
    super(cartModel);
  }
}