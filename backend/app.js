import express from 'express'
import cors from 'cors'
import { router as userRouter } from './routes/userRouter.js'

const app = express()

app.use(express.json())

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://www.localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
)

app.get('/', (req, res) => {
  res.json({ message: 'Test' })
})

app.use('/api/users', userRouter)

export default app
