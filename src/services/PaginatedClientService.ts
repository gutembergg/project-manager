import IPaginated from '@/interfaces/paginated'
import Client from '@/models/Client'
import IClientRepository from '@/repositories/IClientRepository'

interface IRequest {
  page: number
}

class PaginatedClientService {
  private clientRepository: IClientRepository

  constructor(clientRepository: IClientRepository) {
    this.clientRepository = clientRepository
  }

  public async execute({ page }: IRequest): Promise<IPaginated<Client>> {
    const [clients, total] = await this.clientRepository.findAllPaginated(
      page * 10
    )

    const totalPages = Math.ceil(total / 10)

    const response: IPaginated<Client> = {
      data: clients,
      totalElements: total,
      page,
      elements: clients.length,
      elementsPerPage: 10,
      totalPages,
      firstPage: page === 0,
      lastPage: page === totalPages - 1
    }

    return response
  }
}

export default PaginatedClientService
