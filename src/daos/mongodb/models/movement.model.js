import { Schema, model } from "mongoose";

const movementSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      index: true,
    },
    originLocation: {
      type: Schema.Types.ObjectId,
      ref: "Location",
      required: true,
    },
    destinyLocation: {
      type: Schema.Types.ObjectId,
      ref: "Location",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    dateEntry: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const movementModel = model("Movement", movementModel);
