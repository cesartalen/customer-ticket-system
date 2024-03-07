import express from 'express'
import { router as userRouter } from './routes/userRouter.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Test' })
})

app.use('/api/users', userRouter)

export default app
