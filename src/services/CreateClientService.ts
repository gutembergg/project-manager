import IClientRepository from '@/repositories/IClientRepository'
import Client from '@/models/Client'

interface IRequest {
    name: string,
    email: string,
    telephone: string
}

class CreateClientService {
    private clientRepository: IClientRepository

    constructor (clientRepository: IClientRepository) {
      this.clientRepository = clientRepository
    }

    public async execute ({ name, email, telephone }: IRequest): Promise<Client> {
      const client = this.clientRepository.create({
        name,
        email,
        telephone
      })

      return client
    }
}

export default CreateClientService
