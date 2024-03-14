import express from 'express'
import * as ticketController from '../controllers/ticketController.js'
import * as replyController from '../controllers/replyController.js'
import { protect } from '../middleware/auth.js'

export const router = express.Router()

router.post('/createTicket', protect, ticketController.createTicket)
router.get('/categories', ticketController.getCategories)

router.get('/tickets', protect, ticketController.getTickets)
router.get('/tickets/:id', protect, ticketController.getTicket)
router.put('/tickets/:id', protect, ticketController.closeTicket)

router.post('/reply/:id', protect, replyController.createReply)
router.get('/reply/:id', protect, replyController.getReplies)

// router.delete('/ticket/:id', protect, ticketController.getTicket)
