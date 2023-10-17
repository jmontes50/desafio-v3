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
    status: {
      type: String,
      enum: ["created", "pending", "process", "done", "canceled"],
    },
    commentary: [
      {
        dateEntry: {
          type: Date,
          default: Date.now,
        },
        comment: {
          type: String,
          required: true,
        },
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
      },
    ],
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

export const movementModel = model("Movement", movementSchema);
