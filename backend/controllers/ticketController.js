import { AppError } from '../utils/appError.js'
import { catchAsync } from '../utils/catchAsync.js'
import { User } from '../models/userSchema.js'
import { Ticket } from '../models/ticketSchema.js'
import { categories } from '../config/categories.js'

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

export const getTickets = catchAsync(async (req, res) => {
  const userTickets = await Ticket.find({ user: req.user.id })
  res.status(200).json(userTickets)
})

export const getTicket = catchAsync(async (req, res) => {
  const ticketId = req.params.id
  const ticket = await Ticket.findById(ticketId)
  res.status(200).json(ticket)
})

export const getCategories = catchAsync(async (req, res) => {
  res.json(categories)
})

export const closeTicket = catchAsync(async (req, res) => {
  const ticketId = req.params.id
  const ticket = await Ticket.findById(ticketId)
  ticket.status = false
  await ticket.save()
  res.status(200).json(ticket)
})
