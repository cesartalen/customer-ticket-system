import mongoose from 'mongoose'

const ticketSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.schema,
    },
    name: {
      type: String,
      required: [true, 'Please provide a title for your ticket'],
    },
    status: {
      type: Boolean,
      required: true,
      default: true,
    },
    category: {
      type: String,
      required: [true, ''],
    },
  },
  {
    timestamps: true,
  }
)
