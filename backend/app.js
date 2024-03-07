import express from 'express'
import dotenv from 'dotenv'
import { router as userRouter } from './routes/userRouter.js'
import { router as ticketRouter } from './routes/ticketRouter.js'

dotenv.config()
const PORT = process.env.port || 3000

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Test' })
})

app.use('/api/users', userRouter)

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})
