import ClassController from "./class.controller.js";
import SaleServices from "../services/sale.services.js";

const saleService = new SaleServices();

export default class SaleController extends ClassController {
  constructor() {
    super(saleService);
  }
}
