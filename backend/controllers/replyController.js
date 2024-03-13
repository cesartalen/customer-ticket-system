import { Reply } from '../models/replySchema.js'
import { Ticket } from '../models/ticketSchema.js'
import { User } from '../models/userSchema.js'
import { catchAsync } from '../utils/catchAsync.js'
import { AppError } from '../utils/appError.js'

export const createReply = catchAsync(async (req, res, next) => {
  const { message } = req.body

  if (!message) {
    return next(new AppError('You need to enter a message', 400))
  }

  const ticket = await Ticket.findById(req.params.id)
  const user = await User.findById(req.user.id)
  let admin = false

  if (user.isAdmin.toString() == 'true') {
    admin = true
  }

  if (admin == false) {
    if (ticket.user.toString() !== req.user.id) {
      return next(new AppError('Not authorized'), 401)
    }
  }

  const reply = await Reply.create({
    user: req.user.id,
    message,
    ticket: req.params.id,
    isAdmin: admin,
  })
  res.status(200).json(reply)
})

export const getReplies = catchAsync(async (req, res, next) => {
  const ticket = await Ticket.findById(req.params.id)
  const user = await User.findById(req.user.id)
  let admin = false

  if (user.isAdmin.toString() == 'true') {
    admin = true
  }

  if (admin == false) {
    if (ticket.user.toString() !== req.user.id) {
      return next(new AppError('Not authorized'), 401)
    }
  }

  const replies = await Reply.find({ ticket })

  res.status(200).json(replies)
})
