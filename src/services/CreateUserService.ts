import User from '@/models/User'
import IUserRepositoty from '@/repositories/IUserRepository'
import UserRepository from '@/repositories/UserRepository'

import bcrypt from 'bcrypt'

interface IRequest {
  name: string
  email: string
  password: string
}

class CreateUserService {
  private userRepository: IUserRepositoty

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const passwordHash = await bcrypt.hash(password, 8)
    const user = await this.userRepository.create({
      name,
      email,
      password: passwordHash
    })

    return user
  }
}

export default CreateUserService
