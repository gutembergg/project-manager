import AppErros from '@/errors/AppErros'
import IClientRepository from '@/repositories/IClientRepository'

class ClientDeleteService {
  private clientRepository: IClientRepository

  constructor(clientRepository: IClientRepository) {
    this.clientRepository = clientRepository
  }

  public async execute(id: string): Promise<void> {
    const client = await this.clientRepository.findById(id)

    if (!client) {
      throw new AppErros('Client not found', 404)
    }
    await this.clientRepository.delete(id)
  }
}

export default ClientDeleteService
