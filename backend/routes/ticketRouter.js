import express from 'express'
import * as ticketController from '../controllers/ticketController.js'
import { protect } from '../middleware/auth.js'

export const router = express.Router()

router.post('/createTicket', protect, ticketController.createTicket)
router.get('/categories', ticketController.getCategories)

router.get('/tickets', protect, ticketController.getTickets)
router.get('/tickets/:id', protect, ticketController.getTicket)

// router.delete('/ticket/:id', protect, ticketController.getTicket)
