import bcrypt from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'
import { AppError } from '../utils/appError.js'
import { catchAsync } from '../utils/catchAsync.js'
import { User } from '../models/userSchema.js'

const { sign, decode, verify } = jsonwebtoken

export const createUser = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return next(new AppError('All fields must be filled!', 400))
  }

  const userExistsEmail = await User.findOne({ email })
  const userExistsName = await User.findOne({ name })

  if (userExistsEmail || userExistsName) {
    return next(new AppError('User already exists!', 400))
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  await user.save()

  res.status(201).json({ status: true, name: user.name })
})

const generateToken = (id) => {
  return jsonwebtoken.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '14d',
  })
}

export const loginUser = catchAsync(async (req, res) => {
  const { name, password } = req.body

  const user = await User.findOne({ name })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    return next(new AppError('Invalid login!', 401))
  }
})
