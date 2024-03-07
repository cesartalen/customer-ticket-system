import express from 'express'
import dotenv from 'dotenv'
import { router as userRouter } from './routes/userRouter.js'

dotenv.config()
const PORT = process.env.port || 3000

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Test' })
})

app.use('/api/users', userRouter)

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})
