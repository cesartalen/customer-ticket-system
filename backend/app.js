import express from 'express'
import cors from 'cors'
import { router as userRouter } from './routes/userRouter.js'
import { router as ticketRouter } from './routes/ticketRouter.js'

const app = express()

app.use(express.json())

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://www.localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'authorization'],
  })
)

app.get('/', (req, res) => {
  res.json({ message: 'Test' })
})

app.use('/api/users', userRouter)
app.use('/api/tickets', ticketRouter)

export default app
