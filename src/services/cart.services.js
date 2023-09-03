import Services from './class.services.js';

import CartDao from "../daos/mongodb/cart.dao.js";

export default class CartServices extends Services {
    constructor() {
        super(new CartDao())
    }
}