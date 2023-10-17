/* eslint-disable class-methods-use-this */
import ClassController from "./class.controller.js";
import CartServices from "../services/cart.services.js";
import SaleServices from "../services/sale.services.js";
import { createResponse } from "../utils.js";

const cartService = new CartServices();
const saleService = new SaleServices();

export default class CartController extends ClassController {
  constructor() {
    super(cartService);
  }

  async purchase(req, res, next) {
    try {
      const purchase = await cartService.purchase(req.params.cid);
      if (!purchase) createResponse(res, 404, "Error at create Purchase");
      else {
        const sale = await saleService.create({
          ...req.body,
          products: [...purchase.productsPurchased],
          total: purchase.productsPurchased.reduce(
            (total, prod) => total + prod.price,
            0,
          ),
        });
        createResponse(res, 200, { purchase, sale });
      }
    } catch (error) {
      next(error.message);
    }
  }
}
