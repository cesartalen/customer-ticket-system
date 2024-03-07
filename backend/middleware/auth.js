import { User } from '../models/userSchema.js'
import { catchAsync } from '../utils/catchAsync.js'
import { AppError } from '../utils/appError.js'
import jsonwebtoken from 'jsonwebtoken'

export const protect = catchAsync(async (req, res, next) => {
  try {
    let token = String(req.headers.authorization)
      .replace(/^bearer|^jwt/i, '')
      .replace(/^\s+|\s+$/gi, '')
    const decodedToken = jsonwebtoken.verify(token, process.env.JWT_SECRET)

    // Getting user for further authentication, excluding password for security
    req.user = await User.findById(decodedToken.id).select('-password')

    next()
  } catch (error) {
    return next(new AppError('You are not authorized!', 401))
  }
})
