import UserRepository from '@/repositories/UserRepository'
import CreateUserService from '@/services/CreateUserService'
import { Request, Response } from 'express'

class UserController {
  public async create (req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body

    const userRepository = new UserRepository()
    const userService = new CreateUserService(userRepository)

    const user = await userService.execute({
      name,
      email,
      password
    })

    delete user.password

    return res.status(201).json(user)
  }
}

export default UserController
