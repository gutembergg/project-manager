import IClientRepository from '@/repositories/IClientRepository'
import Client from '@/models/Client'
import AppErros from '@/errors/AppErros'

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
      const clientEmail = await this.clientRepository.findByEmail(email)

      if (clientEmail) {
        throw new AppErros('Email alwais used', 401)
      }

      const client = this.clientRepository.create({
        name,
        email,
        telephone
      })

      return client
    }
}

export default CreateClientService
