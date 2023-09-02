import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    image: {
      type: Array,
      default: [],
    },
    type: {
      ref: "Category",
      type: Schema.Types.ObjectId,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

productSchema.plugin(mongoosePaginate);

export const ProductModel = model("Product", productSchema);
