import Services from "./class.services.js";

import CartDao from "../daos/mongodb/cart.dao.js";

const cartDao = new CartDao();

export default class CartServices extends Services {
  constructor() {
    super(cartDao);
  }
}
