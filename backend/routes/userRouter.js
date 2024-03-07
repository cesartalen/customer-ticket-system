import express from 'express'
import * as userController from '../controllers/userController.js'

export const router = express.Router()

router.post('/signUp', userController.createUser)
router.post('/login', userController.loginUser)
// To create protected route
// router.post('/login', auth, userController.loginUser)
