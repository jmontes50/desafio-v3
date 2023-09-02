import { Schema, model } from "mongoose";

const saleSchema = new Schema(
  {
    client: {
      type: Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        id: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        qty: {
          type: Number,
          min: 1,
          required: true,
        },
        //aquí asumo que tengo que añadir la variante
      },
    ],
    movement: {
      type: Schema.Types.ObjectId,
      ref: "Movement",
    },
    total: {
      type: Number,
      required: true,
    },
    dateEntry: {
      type: Date,
      default: Date.now,
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

export const saleModel = model("Sale", saleSchema);
