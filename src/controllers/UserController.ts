import UserRepository from '@/repositories/UserRepository'
import CreateUserService from '@/services/CreateUserService'
import { Request, Response } from 'express'
import EnableUserService from '@/services/EnableUserService'

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const userRepository = new UserRepository()

    const { id } = req.params
    const user = await userRepository.findById(id)

    return res.status(200).json(user)
  }

  public async create(req: Request, res: Response): Promise<Response> {
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

  public async enable(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const userRepository = new UserRepository()
    const enableUser = new EnableUserService(userRepository)

    const user = await enableUser.execute({
      id
    })

    delete user.password

    return res.status(201).json(user)
  }
}

export default UserController
