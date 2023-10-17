import MongoDao from "./mongo.dao.js";
import { cartModel } from "./models/cart.model.js";
import { productModel } from "./models/product.model.js";

export default class CartDao extends MongoDao {
  constructor() {
    super(cartModel);
  }

  async purchase(cartId) {
    //necesito encontrar el carrito por id y verificar que tengo stock de cada producto dentro del carrito
    //si tengo stock, resto el stock y cambio el status del carrito a paid
    //Si el producto no tiene suficiente stock para la cantidad indicada en el producto del carrito, entonces no agregar el producto al proceso de compra.
    const productsPurchased = [];
    const productsWithoutStock = [];
    cartModel.findById(cartId).then((cart) => {
      cart.products.forEach((productCart) => {
        const product = productModel.findById(productCart.id);

        if (!product) return false;
        if (product.stock < productCart.qty) {
          productsWithoutStock.push(product.id);
          return false;
        } else {
          productsPurchased.push({ id: productCart.id, qty: productCart.qty });
          product.stock -= productCart.qty;
          product.save();
        }
      });
      console.log({
        productsPurchased,
        productsWithoutStock,
      });
      return {
        productPurchased,
        productWithoutStock,
      };
    });
  }
}
