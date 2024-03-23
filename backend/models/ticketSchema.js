import mongoose from 'mongoose'

const ticketSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'ticket needs to know the user'],
    },
    name: {
      type: String,
      required: [true, 'Please provide a title for your ticket'],
      maxlength: 128,
      minlength: 3,
    },
    status: {
      type: Boolean,
      required: true,
      default: true,
    },
    category: {
      type: String,
      enum: ['Account', 'Order', 'Other'],
      required: [true, 'You need to select a category'],
    },
  },
  {
    timestamps: true,
  }
)

export const Ticket = mongoose.model('Ticket', ticketSchema)
