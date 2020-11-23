import IUserRepositoty from '@/repositories/IUserRepository'
import User from '@/models/User'
import AppErros from '@/errors/AppErros'

interface IRequest {
  id: string
}

class EnableUserService {
  private userRepository: IUserRepositoty

  constructor(userRepository: IUserRepositoty) {
    this.userRepository = userRepository
  }

  public async execute({ id }: IRequest): Promise<User> {
    const user = await this.userRepository.findById(id)

    if (!user) {
      throw new AppErros('User not found', 400)
    }

    user.active = !user.active

    await this.userRepository.save(user)

    return user
  }
}

export default EnableUserService
