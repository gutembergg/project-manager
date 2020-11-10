import { Router } from 'express'
import UserController from '../controllers/UserController'
import middleware from '../middlewares/auth'

const userRoute = Router()

const userController = new UserController()

userRoute.post('/', userController.create)
userRoute.patch('/:id', userController.enable)
userRoute.get('/:id', middleware, userController.index)

export default userRoute
