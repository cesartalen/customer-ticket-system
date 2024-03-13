import mongoose from 'mongoose'

const replySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'reply needs to know the user'],
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    ticket: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ticket',
      required: [true, 'reply needs to know the ticket'],
    },
    message: {
      type: String,
      required: [true, 'reply needs text content'],
    },
  },
  {
    timestamps: true,
  }
)

export const Reply = mongoose.model('Reply', replySchema)
