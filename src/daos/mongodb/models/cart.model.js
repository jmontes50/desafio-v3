import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const cartSchema = new Schema({
  name: { type: Array, default: [] },
});

cartSchema.pre("find", function () {
  this.populate("Products");
});

cartSchema.plugin(mongoosePaginate);

export const cartModel = model("carts", cartSchema);
