import { AppError } from '../utils/appError.js'

export const createUser = (req, res, next) => {
  const { name, email, password, passwordConfirm } = req.body

  if (!name || !email || !password || !passwordConfirm) {
    return next(new AppError('All fields must be filled!', 400))
  }
  res.send('register user')
}

export const loginUser = (req, res) => {
  res.send('login user')
}
