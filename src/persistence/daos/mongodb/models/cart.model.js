import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const cartSchema = new Schema({
  products: [
    {
      //acá asumo que tengo que añadir la variante
      id: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      qty: {
        type: Number,
        required: true,
        min: 0,
      },
    },
  ],
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

cartSchema.pre("find", function () {
  this.populate("Products");
});

cartSchema.plugin(mongoosePaginate);

export const cartModel = model("Cart", cartSchema);
