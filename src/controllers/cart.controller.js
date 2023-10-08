import ClassController from "./class.controller.js";
import CartServices from "../services/cart.services.js";

const cartService = new CartServices();

export default class CartController extends ClassController {
  constructor() {
    super(cartService);
  }

}
