import MongoDao from "./mongo.dao.js";
import { cartModel } from "./models/cart.model.js";
import { productModel } from "./models/product.model.js";

export default class CartDao extends MongoDao {
  constructor() {
    super(cartModel);
  }

  purchase(cartId) {
    //necesito encontrar el carrito por id y verificar que tengo stock de cada producto dentro del carrito
    //si tengo stock, resto el stock y cambio el status del carrito a paid
    //Si el producto no tiene suficiente stock para la cantidad indicada en el producto del carrito, entonces no agregar el producto al proceso de compra. 
    cartModel.findById(cartId).then((cart) => {
      cart.products.forEach((product) => {

        // if (product.stock < product.quantity) {
        //   console.log("No hay stock suficiente");
        // } else {
        //   product.stock -= product.quantity;
        //   product.save();
        // }
      });
      // cart.status = "paid";
      // cart.save();
    });
    // return this.model.findByIdAndUpdate(cartId, { status: "paid" });
  }
}
