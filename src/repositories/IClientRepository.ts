import Client from '@/models/Client'
import ICreateClientDTO from '@/dtos/ICreateClientDTO'

export default interface IClientRepository {
  findAll(): Promise<Client[]>
  findAllPaginated(page: number): Promise<[Client[], number]>
  findAllByName(name: string): Promise<Client[]>
  findByEmail(email: string): Promise<Client | undefined>
  findById(id: string): Promise<Client | undefined>
  create(createClientDTO: ICreateClientDTO): Promise<Client>
  save(client: Client): Promise<Client>
  delete(id: string): Promise<void>
}
