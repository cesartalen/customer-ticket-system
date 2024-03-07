import dotenv from 'dotenv'
import app from './app.js'
import mongoose from 'mongoose'

dotenv.config()
const PORT = process.env.port || 3000

mongoose
  .connect(process.env.MONGODB_URI)
  .then((con) => console.log(`Mongo DB Connected: ${con.connection.host}`))

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})
