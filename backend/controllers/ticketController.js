import { AppError } from '../utils/appError.js'
import { catchAsync } from '../utils/catchAsync.js'
import { User } from '../models/userSchema.js'
import { Ticket } from '../models/ticketSchema.js'

export const createTicket = catchAsync(async (req, res, next) => {
  const { name, category } = req.body

  if (!name || !category) {
    return next(new AppError('All fields must be filled!', 400))
  }
  const ticket = await Ticket.create({
    user: req.user.id,
    name,
    category,
  })

  res.status(201).json(ticket)
})
