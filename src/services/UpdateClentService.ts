import IClientRepository from '@/repositories/IClientRepository'
import AppErros from '@/errors/AppErros'
import Client from '@/models/Client'

interface IRequest {
  id: string
  name: string
  email: string
  telephone: string
}

class UpdateClientService {
  private clientRepository: IClientRepository

  constructor(clientRepository: IClientRepository) {
    this.clientRepository = clientRepository
  }

  public async execute({
    id,
    name,
    email,
    telephone
  }: IRequest): Promise<Client> {
    const client = await this.clientRepository.findById(id)

    if (!client) {
      throw new AppErros('Client not found', 401)
    }

    if (email !== client.email) {
      const isVerify = await this.clientRepository.findByEmail(email)

      if (isVerify) {
        throw new AppErros('Email already used', 401)
      }
    }

    client.name = name
    client.email = email
    client.telephone = telephone

    await this.clientRepository.save(client)

    return client
  }
}

export default UpdateClientService
