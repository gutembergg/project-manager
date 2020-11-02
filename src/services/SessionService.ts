import User from '@/models/User'
import IUserRepositoty from '@/repositories/IUserRepository'
import UserRepository from '@/repositories/UserRepository'
import { compare } from 'bcrypt'

import AppErros from '@/errors/AppErros'
import { sign } from 'jsonwebtoken'

interface IRequest {
    email: string,
    password: string
}

interface IResponse {
  token: string,
  user: User
}

class SessionService {
    private userRepository: IUserRepositoty

    constructor (userRepository: UserRepository) {
      this.userRepository = userRepository
    }

    public async execute ({ email, password }: IRequest): Promise<IResponse> {
      const user = await this.userRepository.findByEmail(email)

      if (!user) {
        throw new AppErros('User not found', 401)
      }

      const passwordCompare = await compare(password, user.password)

      if (!passwordCompare) {
        throw new AppErros('Invalid Credentials', 401)
      }

      if (!user.active) {
        throw new AppErros('User not active', 401)
      }

      const token = sign({}, process.env.APP_SECRET as string, {
        expiresIn: '1d'
      })

      return {
        token,
        user
      }
    }
}

export default SessionService
