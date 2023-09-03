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
    defaultImage: {
      type: String,
      default: "",
    },
    variants: [
      {
        nameVariant: {
          type: String,
          required: true,
        },
        imageVariant: {
          type: String,
        },
        variantPrice: {
          type: Number,
        },
      },
    ],
    type: {
      ref: "Category",
      type: Schema.Types.ObjectId,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

productSchema.plugin(mongoosePaginate);

export const productModel = model("Product", productSchema);
