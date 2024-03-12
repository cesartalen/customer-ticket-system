import express from 'express'
import * as ticketController from '../controllers/ticketController.js'
import { protect } from '../middleware/auth.js'

export const router = express.Router()

router.post('/createTicket', protect, ticketController.createTicket)
router.get('/categories', ticketController.getCategories)
