import { Schema, model } from "mongoose";

const storageSchema = new Schema({
  location: {
    type: Schema.Types.ObjectId,
    ref: "Location",
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  stock: {
    type: Number,
    min: 0,
    required: true,
  },
  description: {
    type: String,
  },
  active: {
    type: Boolean,
    default: true,
    required: true,
  },
});

export const storageModel = model("Storage", storageSchema);
