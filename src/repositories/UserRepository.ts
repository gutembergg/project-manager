import ICreateUserDTO from '@/dtos/CreateUserDTO'
import User from '@/models/User'
import { getRepository, Repository } from 'typeorm'
import IUserRepositoty from './IUserRepository'

class UserRepository implements IUserRepositoty {
private ormRepository: Repository<User>

constructor () {
  this.ormRepository = getRepository(User)
}

public async findByEmail (email: string): Promise<User | undefined> {
  const user = await this.ormRepository.findOne({
    where: { email }
  })
  return user
}

public async create ({ name, email, password }: ICreateUserDTO): Promise<User> {
  const user = this.ormRepository.create({
    name,
    email,
    password
  })

  await this.ormRepository.save(user)

  return user
}
}

export default UserRepository
