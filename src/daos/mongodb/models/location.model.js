import { Schema, model } from "mongoose";

const locationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    address: {
      type: String,
      required: true,
    },
    isInternalLocation: {
      type: Boolean,
      default: true,
    },
    isExternalLocation: {
      type: Boolean,
      default: false,
    },
    isClientLocation: {
      type: Boolean,
      default: false,
    },
    clientId: {
      type: Schema.Types.ObjectId,
      ref: "Client",
    },
    zipCode: {
      type: Number,
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

export const locationModel = model("Location", locationSchema);
