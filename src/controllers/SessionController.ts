import { Request, Response } from 'express'
import UserRepository from '@/repositories/UserRepository'
import SessionService from '@/services/SessionService'

class SessionController {
  public async create (req: Request, res: Response) {
    const { email, password } = req.body

    const userRepository = new UserRepository()
    const sessionService = new SessionService(userRepository)

    const session = await sessionService.execute({
      email,
      password
    })

    return res.json(session)
  }
}

export default SessionController
