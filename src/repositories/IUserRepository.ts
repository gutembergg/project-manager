import ICreateUserDTO from '@/dtos/CreateUserDTO'
import User from '@/models/User'

export default interface IUserRepositoty {
    findByEmail(email: string): Promise<User | undefined>

    create(createUserDTO: ICreateUserDTO): Promise<User>
}
