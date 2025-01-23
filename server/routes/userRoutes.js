import express from 'express'
import {registerUser, loginUser} from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

export default userRouter

//localhost:40000/api/user/register
//localhost:40000/api/user/login