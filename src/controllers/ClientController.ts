import { Request, Response } from 'express'
import ClientRepository from '@/repositories/ClientRepository'
import CreateClientService from '@/services/CreateClientService'
import UpdateClientService from '@/services/UpdateClentService'
import PaginatedClientService from '@/services/PaginatedClientService'
import ClientDeleteService from '@/services/ClientDeleteService'

class ClientController {
  public async index(req: Request, res: Response): Promise<Response> {
    const clientrepository = new ClientRepository()

    const client = await clientrepository.findAll()
    return res.json(client)
  }

  public async paginated(req: Request, res: Response): Promise<Response> {
    const { page } = req.query
    const clientrepository = new ClientRepository()
    const paginatedClient = new PaginatedClientService(clientrepository)

    const clients = await paginatedClient.execute({
      page: page !== undefined ? parseInt(page.toString(), 10) : 0
    })

    return res.json(clients)
  }

  public async search(req: Request, res: Response): Promise<Response> {
    const { name } = req.query
    const clientrepository = new ClientRepository()

    const clients = await clientrepository.findAllByName(name?.toString() || '')

    return res.json(clients)
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, telephone } = req.body
    const clientrepository = new ClientRepository()
    const clientService = new CreateClientService(clientrepository)

    const client = await clientService.execute({
      name,
      email,
      telephone
    })
    return res.json(client)
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { name, email, telephone } = req.body
    const clientrepository = new ClientRepository()
    const updatedClent = new UpdateClientService(clientrepository)

    const client = await updatedClent.execute({
      id,
      name,
      email,
      telephone
    })

    return res.json(client)
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const clientrepository = new ClientRepository()
    const deleteClient = new ClientDeleteService(clientrepository)

    await deleteClient.execute(id)

    return res.status(204).send('Ok')
  }
}

export default ClientController
