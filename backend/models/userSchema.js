import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A username is required!'],
      unique: true,
      lowercase: true,
      maxlength: 32,
      minlength: 3,
      match: /^[A-Za-z0-9]+$/,
    },
    email: {
      type: String,
      required: [true, 'An email is required!'],
      unique: true,
      lowercase: true,
      maxlength: 64,
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 8,
      maxlength: 32,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

export const User = mongoose.model('User', userSchema)
