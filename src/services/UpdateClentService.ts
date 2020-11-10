import IClientRepository from '@/repositories/IClientRepository'
import AppErros from '@/errors/AppErros'
import Client from '@/models/Client'

interface Irequest {
    id: string,
    name: string,
    email: string,
    telephone: string
}

class UpdateClientService {
    private clientRepository: IClientRepository

    constructor (clientRepository: IClientRepository) {
      this.clientRepository = clientRepository
    }

    public async execute ({ id, name, email, telephone }: Irequest): Promise<Client> {
      const client = await this.clientRepository.findById(id)

      if (!client) {
        throw new AppErros('Client not found', 400)
      }

      if (email !== client.email) {
        const verify = await this.clientRepository.findByEmail(email)

        if (verify) {
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
